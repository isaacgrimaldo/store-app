import { Request } from "express";

export interface RequestCustom extends Request {
    body: {
        name: string,
        password: string,
        user_id: string
    };
}