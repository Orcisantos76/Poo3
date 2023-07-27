import express, { Request, Response } from "express";
import cors from "cors";
import { CarController } from "./controller/CarController";

const app = express();
app.use(cors())
app.use(express.json());

app.listen(3003,()=>{
    console.log("Arquivo index, sendo executado na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Funciona! !");
});

const carController = new CarController

app.get("/cars",carController.getCars)
app.put ('/cars/:id',carController.putCars)
app.delete("/cars/:id",carController.deleteCar)