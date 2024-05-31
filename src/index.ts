import express, { NextFunction } from "express";
import get_config from "./config/config";
import ProductRouter from "./router/product"


const app = express();
const port = get_config("PORT") || 3030

app.use(express.json())
app.use("/products", ProductRouter)



app.get("*", (req: express.Request, res: express.Response) => {
    res.status(404).send({msg: "404, endpoint not found"});
})


app.use((error: Error, req: express.Request, res: express.Response, next: NextFunction) => {
    res.status(500).send({ msg: error.message });
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

export default app;