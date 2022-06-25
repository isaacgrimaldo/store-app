import database from "../db_connection";
import { DataTypes } from "sequelize";

const User = database.define("User", {
    user_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    current_shopping_car: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});


export default User;