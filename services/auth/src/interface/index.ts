export interface User {
    name: string,
    user_id: string,
    password: string,
}

export interface Token {
    name: string,
    user_id: string
    iat: number,
    exp: number
} 