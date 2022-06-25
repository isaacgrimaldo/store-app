import { Response } from "express";
import { v4 as uudi } from "uuid";

import { RequestCustom } from "../interfaces/Requests";
import { savePassword } from "./helpers";
import User from "../db/models/Users";


const controllers = {
    createNewUser: async (req: RequestCustom, res: Response) => {
        const { name, password } = req.body;
        const user_id: string = uudi();

        try {
            const hash: string = savePassword(password);
            const newUser = User.build({ name, password: hash, user_id });
            await newUser.save();

            return res.redirect("https://www.youtube.com/watch?v=Lz2rTgXx2aI");

        } catch (error) {
            console.error(error);
            return res.status(500).send("SERVER ERROR");
        }


    }
};

export default controllers;