import { Request, Response } from "express";
import { validationResult } from "express-validator";

const validFields = (req: Request, res: Response, next: () => void) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            error: error.mapped(),
        });
    }

    next();
};


export default validFields;