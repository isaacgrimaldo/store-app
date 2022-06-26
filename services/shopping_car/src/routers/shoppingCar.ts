import { Router } from "express";
import controllers from "../controllers/shoppingCar";
import { checkToken } from "../middlewares/helpers";
import middlewares from "../middlewares/shoppingCar";

const route = Router();

route.use(checkToken);

route.post("/create/new", controllers.CreateShoppingCar);

route.put("/add/item", [
    ...middlewares.addItem
], controllers.addItem);

route.put("/delete/item", [
    ...middlewares.deleteItem
], controllers.deleteItem);

route.put("/change/units", [
    ...middlewares.changeUnits
], controllers.changeUnits);

export default route;