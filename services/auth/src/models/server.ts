import  express , { Application } from "express";
import cors from "cors";

import {config} from "dotenv";
config();

//routers
import auth from "../routes/auth";

class Server {
	private readonly app:Application;
	private port:string;
	private paths = {
		auth : "/api/auth"
	};

	constructor(){
		this.app = express();
		this.port = process.env.PORT || "5000";
		this.middlewares(); 
		this.routes();
	}

	private middlewares(){
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use(express.static("public"));
	}

	private routes(){
		this.app.use(this.paths.auth, auth);
	}
    
	public listen () {
		this.app.listen(this.port, () => {
			console.log("Server running in http://localhost" + this.port);
		});
	}
}

export default Server;