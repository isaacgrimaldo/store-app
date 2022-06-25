import { genSaltSync, hashSync } from "bcrypt";

export const savePassword = (password: string): string => {
    const salt: string = genSaltSync(10);
    const hash: string = hashSync(password, salt);
    return hash;
};
