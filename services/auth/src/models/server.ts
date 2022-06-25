import express, { Application } from "express";
import cors from "cors";

import { config } from "dotenv";
config();

//data bases
import PostgresDB from "../db/db_connection";

//routers
import auth from "../routes/auth";

class Server {
	private readonly app: Application;
	private port: string;
	private paths = {
		auth: "/api/auth"
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || "5000";
		this.dataBaseConnection();
		this.middlewares();
		this.routes();
	}

	private async dataBaseConnection() {
		try {
			await PostgresDB.authenticate();
			console.log("---------------------------------------------------------------------");
			console.log("----------------Base de datos de usuarios conectada------------------");
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
		this.app.use(this.paths.auth, auth);
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log("Server running in http://localhost" + this.port);
		});
	}
}

export default Server;