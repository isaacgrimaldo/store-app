import { Response } from "express";
import jwt from "jsonwebtoken";
import { getEnvVariable } from "../../helpers";
import { Token } from "../../interface";
import { RequestCustom } from "../../interface/Request";

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
        console.log(token);
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