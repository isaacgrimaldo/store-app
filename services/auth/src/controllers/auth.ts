import { Response } from "express";
import { RequestCustom } from "../interface/Request";
import { User } from "../interface";
import { checkPassword, getUser } from "./helpers";
import generateJWT from "./helpers/jwt";

const controllers = {
    login: async (req: RequestCustom, res: Response) => {
        const { name, password } = req.body;

        try {

            const user: User | boolean = await getUser(name);
            if (!user) {
                return res.status(400).json({
                    ok: false,
                    message: `not exist any user with the name: ${name}`
                });
            }

            const { password: key, user_id } = user as User;
            const passwordCheck: boolean = checkPassword(password, key);

            if (!passwordCheck) {
                return res.status(400).json({
                    ok: false,
                    message: "authentication error"
                });
            }

            const token = await generateJWT({ name, user_id });
            return res.status(200).json({ token: token });

        } catch (error) {
            console.error(error);
            return res.status(500).send("SERVER ERROR");
        }
    },
    checkToken: async (req: RequestCustom, res: Response) => {
        const { name, user_id } = req.body;
        const newToken = await generateJWT({ name, user_id });
        return res.status(200).json({ token: newToken });
    }
};


export default controllers;