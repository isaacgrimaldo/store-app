import { Response } from "express";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
import { Meta } from "express-validator";

import ShoppingCar from "../../db/models/ShoppingCar";
import { getEnvVariable } from "../../helpers";
import { Beer, ShoppingCar as Car, Token, UnitsUpdate } from "../../interfaces";
import { RequestCustom } from "../../interfaces/Request";

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


export const getShoppingCar = async (req: RequestCustom, res: Response, next: () => void) => {
    const { user_id } = req.body;
    let car = <Car>await ShoppingCar.findOne({ active: true, user_id });
    if (!car) {
        const id_shopping_car = v4();
        const newCar = new ShoppingCar({ id_shopping_car, user_id });
        car = <Car>await newCar.save();
    }
    req.body.shopping_car = car;
    next();
};

export const checkBeer = (beer: Beer, Meta: Meta) => {
    const req = <RequestCustom>Meta.req;
    if (!beer.cost)
        throw new Error("the beer need the property cost");

    if (!beer.name)
        throw new Error("the beer need the property name");

    if (!beer.sku)
        throw new Error("the beer need the property sku");

    if (!beer.units)
        throw new Error("the beer need the property unit");

    req.body.beer = beer;
    return true;
};

export const validFieldItems = (beers: UnitsUpdate[]) => {
    beers.forEach((item, i) => {
        const { name, units } = item;
        if (!name || !units) {
            throw new Error(`Check the field of the index ${i + 1}`);
        }
    });

    return true;
};