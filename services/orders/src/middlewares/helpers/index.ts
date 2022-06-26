import { Response } from "express";
import jwt from "jsonwebtoken";
import Order from "../../db/models/Order";


import { getEnvVariable } from "../../helpers";
import { Address, ShoppingCar, Token } from "../../interfaces";
import { RequestCustom } from "../../interfaces/Request";
import { Order as Item } from "../../interfaces";

const secret = getEnvVariable("WORD_SECRET");

export const checkToken = (req: RequestCustom, res: Response, next: () => void) => {
    const token: string = <string>req.headers["token-x"];

    if (!token) {
        return res.status(401).json({
            error: "401",
            msg: "token was not sent"
        });
    }

    try {
        const payload = <Token>jwt.verify(token, secret);

        if (!payload) {
            return res.status(502).json({
                error: "402",
                msg: "authentication error"
            });
        }
        req.body.name = payload.name;
        req.body.user_id = payload.user_id;
        next();

    } catch (error) {
        return res.status(402).json({ msg: "authentication error" });
    }
};

export const checkIdShoppingCar = async (req: RequestCustom, res: Response, next: () => void) => {
    const { user_id, shopping_car: { id_shopping_car } } = req.body;
    const orders = <Item[]>await Order.find({ user_id });
    const valid = orders.find(item => item.shopping_car.id_shopping_car === id_shopping_car);
    if (valid) {
        return res.status(400).json({
            ok: false,
            message: "the shopping car already was been sent"
        });
    }
    next();
};

export const checkFieldsShoppingCar = (shopping_car: ShoppingCar) => {
    const { active, id_shopping_car, items, total } = shopping_car;

    if (active === null)
        throw new Error("the property active is required");

    if (!id_shopping_car)
        throw new Error("the property id_shopping_car  is required");

    if (!items)
        throw new Error("the property items is required");

    if (!total)
        throw new Error("the property total is required");

    return true;
};

export const checkFieldsAddress = (address: Address) => {
    const { colony, num, street } = address;


    if (!colony)
        throw new Error("the property colony  is required");

    if (!num)
        throw new Error("the property num is required");

    if (!street)
        throw new Error("the property street is required");

    return true;
};

export const checkStatus = async (id: string) => {
    const valid = await Order.findById(id);
    if (valid?.status === false)
        throw new Error("this orders already was payed");

    return true;
};