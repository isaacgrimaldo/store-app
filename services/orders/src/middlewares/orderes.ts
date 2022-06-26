import { check } from "express-validator";
import { checkFieldsAddress, checkFieldsShoppingCar, checkIdShoppingCar, checkStatus } from "./helpers";
import validFields from "./validFields";


const middlewares = {
    createNew: [
        checkIdShoppingCar,
        check("shopping_car", "is required").notEmpty(),
        check("shopping_car", "should be a object").isObject(),
        check("address", "is required").notEmpty(),
        check("address", "should be a object").isObject(),
        check("shopping_car").custom(checkFieldsShoppingCar),
        check("address").custom(checkFieldsAddress),
        validFields
    ],
    payOrder: [
        check("id", "is required").notEmpty(),
        check("id", "should be a mongo ID").isMongoId(),
        check("id").custom(checkStatus),
        validFields
    ]
};

export default middlewares;