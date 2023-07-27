import { Request, Response } from "express"
import { CarDatabase } from "../database/CarsDatabase"
import { Car } from "../models/Car"
import { CarDB } from "../types"


export class CarController{
    public getCars = async (req: Request, res: Response)=>{
        try {
            const q = req.query.q as string | undefined

            const carDatabase = new CarDatabase()
            const carsDB = await carDatabase.findCar()

            const cars: Car[] = carsDB.map((carDB)=> new Car(
                carDB.id,
                carDB.name,
                carDB.marca,
                carDB.year,
                new Date().toISOString()
            ))
            res.status(200).send(cars)
            
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public putCars = async (req: Request, res: Response)=>{
        try {
            const idParam = req.params.id
            const {
                id,
                name,
                marca,
                year
            } = req.body

            const carDatabase = new CarDatabase()

            const carDB = await carDatabase.findCarById(idParam)
            console.log(carDB)
            if (!carDB){
                res.status(404)
                throw new Error("'id' não encontrado")
            }
            const newCar = new Car(
                id || carDB.id ,
                name || carDB.name,
                marca || carDB.marca,
                year || carDB.year,
                new Date().toISOString()
            )
            const newCarDb: CarDB = {
                id:newCar.getId(),
                name: newCar.getName(),
                marca: newCar.getMarca(),
                year: newCar.getYear()
            }


            await carDatabase.updateCarById(idParam, newCarDb)
            res.status(200).send('Item atualizado')


        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
    public deleteCar = async(req: Request, res: Response)=>{
        try {
            const id = req.params.id;
            const carDatabase = new CarDatabase();

            const carDB = await carDatabase.findCarById(id);
            if(!carDB){
                res.status(400)
                throw new Error("'id' não encontrado")
            }
            await carDatabase.deleteCarById(id)

            res.status(200).send("Item deletado com sucesso")



        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}