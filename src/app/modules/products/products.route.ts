import express from "express";
import { ProductsController } from "./products.controller";

const router = express.Router();

router.post("/", ProductsController.createProduct);
router.get("/", ProductsController.getAllProducts);

export const ProductsRoute = router;
