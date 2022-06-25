import { Router } from "express";
const route = Router();

import controllers from "../controllers/auth";
import middlewares from "../middlewares/auth";

route.post("/login", [
	...middlewares.login
], controllers.login);

route.post("/check/token", [
	...middlewares.checkToken
], controllers.checkToken);

export default route;