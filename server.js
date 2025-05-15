import express from "express";
import usersRouter from "./routes/product.routes.js";
import { connectToDb } from "./config/mongodb.js";

const port = 3000;

const app = express();

app.use(express.json());
connectToDb();

app.use('/api', usersRouter);

app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})