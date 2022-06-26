import { Response } from "express";
import { v4 } from "uuid";

import { RequestCustom } from "../interfaces/Request";
import ShoppingCar from "../db/models/ShoppingCar";
import { changesUnits, checkItem } from "./helpers";
import { Beer } from "../interfaces";

const controllers = {
    CreateShoppingCar: async (req: RequestCustom, res: Response) => {
        const { user_id } = req.body;
        const id_shopping_car: string = v4();
        const valid = await ShoppingCar.findOne({ active: true });

        if (valid) {
            return res.status(406).json({
                ok: false,
                message: "the user just can  have one shopping car active"
            });
        }

        try {
            const newShoppingCar = new ShoppingCar({
                id_shopping_car,
                user_id,
            });
            const car = await newShoppingCar.save();
            return res.status(201).json({
                ok: true,
                car: car
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send("SERVER ERROR");
        }
    },
    addItem: async (req: RequestCustom, res: Response) => {
        const { beer, shopping_car } = req.body;
        const { id_shopping_car } = shopping_car;
        try {
            const itemsRepeated = checkItem(beer, shopping_car);
            if (itemsRepeated.valid) {
                const update = await ShoppingCar.findOneAndUpdate(
                    { id_shopping_car },
                    { items: [...itemsRepeated.data] },
                    { new: true, runValidators: true }
                );
                return res.status(201).json({
                    ok: true,
                    update: update
                });
            }

            shopping_car.items = [...shopping_car.items, beer];
            const update = await ShoppingCar.findOneAndUpdate(
                { id_shopping_car },
                { items: [...shopping_car.items] },
                { new: true, runValidators: true }
            );
            return res.status(200).send(update);
        } catch (error) {
            console.error(error);
            return res.status(500).send("SERVER ERROR");
        }
    },
    deleteItem: async (req: RequestCustom, res: Response) => {
        const { item_name, shopping_car } = req.body;
        const { items, id_shopping_car } = shopping_car;
        try {
            const newData: Beer[] = items.filter(item => item.name !== item_name);
            const update = await ShoppingCar.findOneAndUpdate(
                { id_shopping_car },
                { items: [...newData] },
                { new: true, runValidators: true }
            );
            return res.status(201).json({
                ok: true,
                update
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send("SERVER ERROR");
        }
    },
    changeUnits: async (req: RequestCustom, res: Response) => {
        const { shopping_car, items_change_units } = req.body;
        const { items, id_shopping_car } = shopping_car;
        try {
            const newData = changesUnits(items, items_change_units);
            const update = await ShoppingCar.findOneAndUpdate(
                { id_shopping_car },
                { items: [...newData] },
                { new: true, runValidators: true }
            );
            return res.status(200).json({
                ok: true,
                update: update
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send("SERVER ERROR");
        }
    }
};

export default controllers;