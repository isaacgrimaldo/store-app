import { Router } from "express";
import controllers from "../controllers/orders";
import { checkToken } from "../middlewares/helpers";
import middlewares from "../middlewares/orderes";

const route = Router();

route.use(checkToken);

route.get("/", controllers.getOrders);

route.post("/create/new", [
    ...middlewares.createNew
], controllers.createNew);

route.put("/verify/pay/:id", [
    ...middlewares.payOrder
], controllers.payOrder);

export default route;