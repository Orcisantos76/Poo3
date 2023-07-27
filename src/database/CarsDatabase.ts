import { CarDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";


export class CarDatabase extends BaseDatabase{
    public static TABLE_CARS = "cars"
    //buscar toda tabela, e ordernar crescente pelo id
    public async findCar(): Promise<CarDB[]>{
        return await BaseDatabase
            .connection(CarDatabase.TABLE_CARS)
            .select('*')
            .orderBy('id','asc')
    }
    //bucar pelo id
    public async findCarById(id: string): Promise<CarDB | undefined>{
        const [response]: CarDB[] | undefined[]= await BaseDatabase
            .connection(CarDatabase.TABLE_CARS)
            .where({ id })
        return response
    }
    //inserir novo item
    public async insertCar(newCarDB: CarDB){
        await BaseDatabase
            .connection(CarDatabase.TABLE_CARS)
            .insert(newCarDB)
    }
    //update item
    public async updateCarById(id: string, newCar: CarDB){
        await BaseDatabase
            .connection(CarDatabase.TABLE_CARS)
            .update(newCar)
            .where({ id})
    }
    public async deleteCarById(id: string){
        await BaseDatabase
            .connection(CarDatabase.TABLE_CARS)
            .delete()
            .where({id})
    }

}