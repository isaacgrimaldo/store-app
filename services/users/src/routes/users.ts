import { Router } from "express";

import controllers from "../controllers/users";
import middlewares from "../middlewares/users";

const route = Router();

route.post("/newuser", [
    ...middlewares.createNewUser
], controllers.createNewUser);


export default route;