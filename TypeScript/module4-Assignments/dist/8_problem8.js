{
    /*Design a TypeScript class Car that represents a basic car with properties for brand,
    model, and year. Implement a method displayInfo that displays information about the car.
    
    // Sample Input:
        new Car("Toyota", "Corolla", 2020);
    
    // Sample Output:
        "Your car model is:  2020 Toyota Corolla" */
    var Car = /** @class */ (function () {
        function Car(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        Car.prototype.displayInfo = function () {
            console.log("Your cars brand: ".concat(this.brand, ", model: ").concat(this.model, ", year: ").concat(this.year));
        };
        return Car;
    }());
    var car1 = new Car("Audi", "XCC15", 2020);
    car1.displayInfo();
}
