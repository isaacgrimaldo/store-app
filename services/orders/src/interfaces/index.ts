export interface Beer {
    name: string
    sku: string
    cost: number
    units: number
}

export interface Order {
    address: Address,
    shopping_car: ShoppingCar
}

export interface ShoppingCar {
    total: number
    id_shopping_car: string
    active: true
    items: Beer[]
}

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

export interface Address {
    colony: string
    street: string
    num: number
}