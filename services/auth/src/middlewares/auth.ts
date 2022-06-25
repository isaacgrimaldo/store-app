import { check } from "express-validator";
import { checkToken } from "./helpers";
import validFields from "./validFields";

const middlewares = {
    login: [
        check("name", "is require").notEmpty(),
        check("name", "should be a string").notEmpty(),
        check("name", "should have min 6 and 16 characters").isLength({ min: 6, max: 16 }),
        check("password", "is require").notEmpty(),
        check("password", "should be a string").notEmpty(),
        check("password", "should have min 8 and 16 characters").isLength({ min: 8, max: 16 }),
        validFields
    ],
    checkToken: [
        checkToken
    ]
};

export default middlewares;