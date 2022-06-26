import { check } from "express-validator";
import { checkBeer, getShoppingCar, validFieldItems } from "./helpers";
import validFields from "./validFields";

const middlewares = {
    CreateShoppingCar: [],
    addItem: [
        getShoppingCar,
        check("beer", "is required").notEmpty(),
        check("beer", "should be a object").isObject(),
        check("beer").custom(checkBeer),
        validFields
    ],
    deleteItem: [
        getShoppingCar,
        check("item_name", "is required").notEmpty(),
        check("item_name", "should be a string").isString(),
        validFields,
    ],
    changeUnits: [
        getShoppingCar,
        check("items_change_units", "is required").notEmpty(),
        check("items_change_units", "should be a Array").isArray(),
        check("items_change_units").custom(validFieldItems),
        validFields
    ]
};

export default middlewares;