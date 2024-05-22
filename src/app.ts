import express, { Request, Response } from "express";
import { ProductsRoute } from "./app/modules/products/products.route";
const app = express();

//parsers
app.use(express.json());
app.use(express.text());

// Application Route
app.use("/api/products", ProductsRoute);

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello, world!" });
});

export default app;
