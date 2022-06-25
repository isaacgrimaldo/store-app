import { Router  } from "express";
const route =  Router();

route.get("/test", (req,  res) => {
	return res.status(200).json({hello:"hola"});
});

export  default route ;