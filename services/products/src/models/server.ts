import express, { Application } from "express";
import cors from "cors";

import { config } from "dotenv";
config();

//routers
import products from "../routes/products";

//data base
import PostgresDB from "../db/db_connection";
import { getEnvVariable } from "../helpers";

class Server {
	private readonly app: Application;
	private port: string;
	private paths = {
		products: "/api/products"
	};

	constructor() {
		this.app = express();
		this.port = getEnvVariable("PORT");
		this.dataBaseConnection();
		this.middlewares();
		this.routes();
	}

	private async dataBaseConnection() {
		try {
			await PostgresDB.authenticate();
			await PostgresDB.sync();
			console.log("---------------------------------------------------------------------");
			console.log("----------------Base de datos de productos conectada------------------");
			console.log("---------------------------------------------------------------------");
			console.log("---------------Modelos de la base de datos creados------------------------------");

		} catch (error) {
			console.log(error);
			console.log("---------------------------------------------------------------------");
			console.log("----------------Base de datos de usuarios no conectada------------------");
			console.log("---------------------------------------------------------------------");
		}
	}

	private middlewares() {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use(express.static("public"));
	}

	private routes() {
		this.app.use(this.paths.products, products);
	}


	public listen() {
		this.app.listen(this.port, () => {
			console.log("Server running in http://localhost" + this.port);
		});
	}
}

export default Server;