import { Sequelize } from "sequelize";
import { getEnvVariable } from "../helpers";

const host = getEnvVariable("HOST"),
    database = getEnvVariable("DATA_BASE"),
    password = getEnvVariable("DB_PASSWORD"),
    username = getEnvVariable("DB_USERNAME"),
    port = Number(getEnvVariable("DB_PORT"));



const connection = new Sequelize({
    host,
    database,
    password,
    username,
    dialect: "postgres",
    port
});


export default connection;
