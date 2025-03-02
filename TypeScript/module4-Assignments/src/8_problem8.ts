{
/*Design a TypeScript class Car that represents a basic car with properties for brand, 
model, and year. Implement a method displayInfo that displays information about the car.

// Sample Input:
    new Car("Toyota", "Corolla", 2020);

// Sample Output: 
    "Your car model is:  2020 Toyota Corolla" */

class Car{
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo(){
        console.log(`Your cars brand: ${this.brand}, model: ${this.model}, year: ${this.year}`)
    }
}

const car1 = new Car("Audi","XCC15",2020);
car1.displayInfo();

}