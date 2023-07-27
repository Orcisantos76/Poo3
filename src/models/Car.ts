export class Car{
    constructor(
        private id: string,
        private name: string,
        private marca: string,
        private year: number,
        private createdAt: string
    ){}

    public getId(): string{
        return this.id
    }
    public setId(value: string): void{
        this.id=value
    }

    public getName(): string{
        return this.name
    }
    public setName(value: string): void{
        this.name = value
    }
    
    public getMarca(): string{
        return this.marca
    }
    public setMarca(value: string): void{
        this.marca = value
    }

    public getYear(): number{
        return this.year
    }
    public setYear(value: number): void{
        this.year = value
    }

    public getCreatedAt(): string {
        return this.createdAt
    }
    public setCreatedAt(value: string): void {
        this.createdAt = value
    }   
    
    
}

