import { Request } from "express";
import { Beer, ShoppingCar, UnitsUpdate } from "./index";

export interface RequestCustom extends Request {
    body: {
        name: string,
        password: string,
        user_id: string
        shopping_car: ShoppingCar
        beer: Beer,
        item_name: string
        items_change_units: UnitsUpdate[]
    };
}