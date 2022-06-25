import { check } from "express-validator";
import validFields from "./check";
import { checkName } from "./helpers";

const middlewares = {
    createNewUser: [
        check("user_id", "is require").notEmpty(),
        check("user_id", "should be a string").isString(),
        check("name", "is require").notEmpty(),
        check("name", "should be a string").notEmpty(),
        check("name", "should have min 6 and 16 characters").isLength({ min: 6, max: 16 }),
        check("password", "is require").notEmpty(),
        check("password", "should be a string").notEmpty(),
        check("password", "should have min 8 and 16 characters").isLength({ min: 8, max: 16 }),
        check("name").custom(checkName),
        validFields
    ]
};


export default middlewares;


