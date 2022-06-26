import database from "../db_connection";
import { DataTypes } from "sequelize";

const Product = database.define("products", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sku: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false
});


export default Product;