import { config } from "dotenv";
config();

export const getEnvVariable = (variable: string): string => {

    const env = process.env[variable];
    if (!env) {
        throw new Error(`The variable ${variable} not exist in the server`);
    }

    return env;
};