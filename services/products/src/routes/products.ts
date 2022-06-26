import { Router } from "express";
import controllers from "../controllers/products";
import { selectSearch } from "../middlewares/helpers";


const route = Router();

route.get("/", selectSearch, controllers.getProduct);

export default route;

