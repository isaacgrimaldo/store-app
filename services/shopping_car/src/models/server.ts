import express, { Application } from "express";
import cors from "cors";
import { config } from "dotenv";
config();

import { getEnvVariable } from "../helpers";

//data base
import MongoDB from "../db/db_connection";

//routes
import shoppingCar from "../routers/shoppingCar";

class Server {
	private readonly app: Application;
	private port: string;
	private paths = {
		shoppingCar: "/api/shopping_car"
	};

	constructor() {
		this.app = express();
		this.port = getEnvVariable("PORT");
		this.dataBaseConnection();
		this.middlewares();
		this.routers();
	}

	private async dataBaseConnection() {
		await MongoDB();
	}

	private middlewares() {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use(express.static("public"));
	}

	private routers() {
		this.app.use(this.paths.shoppingCar, shoppingCar);
	}


	public listen() {
		this.app.listen(this.port, () => {
			console.log("Server running in http://localhost" + this.port);
		});
	}
}

export default Server;