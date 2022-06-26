import { Response } from "express";
import { Op } from "sequelize";
import { Product as Beer, RequestCustom } from "../../interfaces/Request";
import Product from "../../db/models/Users";

export const selectSearch = async (req: RequestCustom, res: Response, next: () => void) => {

    let { min, max, sku, name, limit } = req.query;

    const { page } = req.query;

    if (!page) {
        req.query.page = "1";
    }

    if (!min) min = "0";
    if (!max) max = "1000";
    if (!sku) sku = "";
    if (!name) name = "";
    if (!limit) limit = "15";

    const products = await Product.findAll({
        where: {
            name: {
                [Op.like]: "%" + name + "%"
            },
            sku: {
                [Op.like]: "%" + sku + "%"
            },
            cost: {
                [Op.between]: [Number(min), Number(max)]
            }
        },
        offset: ((Number(req.query.page) - 1) * Number(limit)),
        limit: Number(limit),
    });

    const registers = await Product.findAll({
        where: {
            name: {
                [Op.like]: "%" + name + "%"
            },
            sku: {
                [Op.like]: "%" + sku + "%"
            },
            cost: {
                [Op.between]: [Number(min), Number(max)]
            }
        },
    });

    const pages = Math.ceil(registers.length / 15);
    req.body.list = products as any as Beer[];
    req.body.pages = pages;
    next();
};