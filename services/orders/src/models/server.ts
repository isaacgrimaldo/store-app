import express, { Application } from "express";
import cors from "cors";

import { config } from "dotenv";
config();

import { getEnvVariable } from "../helpers";

//data base
import MongoDB from "../db/db_connection";

//routes
import orders from "../routers/orders";

class Server {
	private readonly app: Application;
	private port: string;
	private paths = {
		orders: "/api/orders"
	};

	constructor() {
		this.app = express();
		this.port = getEnvVariable("PORT");
		this.dataBaseConnection();
		this.middlewares();
		this.routes();
	}

	private async dataBaseConnection() {
		await MongoDB();
	}

	private middlewares() {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use(express.static("public"));
	}

	private routes() {
		this.app.use(this.paths.orders, orders);
	}


	public listen() {
		this.app.listen(this.port, () => {
			console.log("Server running in http://localhost" + this.port);
		});
	}
}

export default Server;