import express from "express";
import { ProductsController } from "./products.controller";

const router = express.Router();

router.post("/", ProductsController.createProduct);
router.get("/", ProductsController.getAllProducts);
router.get("/:productId", ProductsController.getSpecificProduct);
router.put("/:productId", ProductsController.updateSpecificProduct);
router.delete("/:productId", ProductsController.deleteSpecificProduct);

export const ProductsRoute = router;
