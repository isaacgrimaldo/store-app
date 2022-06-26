import { Response } from "express";
import { RequestCustom } from "../interfaces/Request";

const controllers = {
    getProduct: (req: RequestCustom, res: Response) => {
        const { list, pages } = req.body;
        const { page } = req.query;
        try {
            return res.status(200).json({
                pages: pages.toString(),
                data: {
                    page: page,
                    count: list.length,
                    products: list,
                },
            });

        } catch (error) {
            console.error(error);
            return res.status(500).send("SERVER ERROR");
        }
    }
};


export default controllers;