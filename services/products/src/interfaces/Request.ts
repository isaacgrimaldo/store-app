import { Request } from "express";

export interface Product {
    id: number,
    name: string,
    sku: string,
    cost: number
}

export interface RequestCustom extends Request {
    query: {
        name: string,
        min: string
        max: string,
        sku: string,
        page: string,
        limit: string,
    };

    body: {
        list: Product[],
        pages: number
    }
}