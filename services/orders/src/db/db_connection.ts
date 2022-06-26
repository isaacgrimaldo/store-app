import { connect } from "mongoose";
import { getEnvVariable } from "../helpers";

const mongo_uri = getEnvVariable("MONGO_URI");

const connectDB = async () => {
    try {
        await connect(mongo_uri);
        console.log("---------------------------------------------------------------------");
        console.log("----------------Conectado ala base de datos de los perdidos------------------");
        console.log("---------------------------------------------------------------------");
    } catch (error) {
        console.log("---------------------------------------------------------------------");
        console.log("----------------Base de datos de los pedidos cars no conectada------------------");
        console.log("---------------------------------------------------------------------");
    }
};


export default connectDB;