import express, { Application } from "express";
import cors from "cors";

import { config } from "dotenv";
config();

//connection to Postgres data base 
import PostgresDB from "../db/db_connection";

//routes
import users from "../routes/users";

class Server {
	private readonly app: Application;
	private port: string;
	private paths = {
		users: "/api/users"
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || "5000";
		this.dataBaseConnection();
		this.middlewares();
		this.routes();
	}

	private middlewares() {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use(express.static("public"));
	}

	private routes() {
		this.app.use(this.paths.users, users);
	}

	private async dataBaseConnection() {
		try {
			await PostgresDB.authenticate();
			await PostgresDB.sync();
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


	public listen() {
		this.app.listen(this.port, () => {
			console.log("Server running in http://localhost" + this.port);
		});
	}
}

export default Server;