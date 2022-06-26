import { Response } from "express";

import Order from "../db/models/Order";
import { RequestCustom } from "../interfaces/Request";

const controllers = {
    getOrders: async (req: RequestCustom, res: Response) => {
        const { user_id } = req.body;
        try {
            const orders = await Order.find({ user_id });
            return res.status(200).json({
                ok: true,
                orders: orders
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send("SERVER ERROR");
        }
    },
    createNew: async (req: RequestCustom, res: Response) => {
        const body = req.body;
        try {
            const newOrder = new Order(body);
            const data = await newOrder.save();
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).send("SERVER ERROR");
        }
    },
    payOrder: async (req: RequestCustom, res: Response) => {
        const { id } = req.params;
        try {
            const order = await Order.findOneAndUpdate(
                { _id: id },
                { status: false },
                { new: true, runValidators: true }
            );

            return res.status(201).json({
                ok: true,
                order: order
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send("SERVER ERROR");
        }
    }
};

export default controllers;