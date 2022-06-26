import { Request } from "express";
import { Address, ShoppingCar } from "./index";

export interface RequestCustom extends Request {
    body: {
        name: string,
        user_id: string
        shopping_car: ShoppingCar
        address: Address,
    };
}