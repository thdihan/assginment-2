import express, { Request, Response } from "express";
import cors from "cors";
import { ProductsRoute } from "./app/modules/products/products.route";
import { OrdersRoute } from "./app/modules/orders/orders.route";
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// Application Route
app.use("/api/products", ProductsRoute);
app.use("/api/orders", OrdersRoute);

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello, world!" });
});

app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ message: "Route not found" });
});

export default app;
