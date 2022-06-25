import { Sequelize } from "sequelize";

const connection = new Sequelize({
    host: "localhost",
    database: "users_service",
    password: "root",
    username: "postgres",
    dialect: "postgres",
    port: 4000
});


export default connection;
