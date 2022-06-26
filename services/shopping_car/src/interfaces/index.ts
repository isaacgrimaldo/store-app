export interface User {
    name: string
    user_id: string
    password: string
}

export interface Token {
    name: string
    user_id: string
    iat: number
    exp: number
}

export interface ShoppingCar {
    user_id: string
    total: number
    id_shopping_car: string
    active: true
    items: Beer[]
}

export interface Beer {
    name: string
    sku: string
    cost: number
    units: number
}


export interface UnitsUpdate {
    name: string
    units: number
}