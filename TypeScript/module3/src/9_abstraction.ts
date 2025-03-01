{
    // Abstraction in OOP
    // 1. interface and 2. abstracton

    // Interface examples
    interface Vahicle{
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car implements Vahicle{
        startEngine(): void {
            console.log("Car Engine started");
        }
        stopEngine(): void {
            console.log("Car Engine stopped");
        }

        move(): void {
            console.log("Car is on the move");
        }

        switchingEngine(): void{
            console.log("I am swithching the Engine");
        }
    }

    const audiCar = new Car()
    audiCar.startEngine()

    // Abstract example
    abstract class Ship{
        abstract startEngine(): void;
        abstract stopEngine(): void;
        float(): void {
            console.log("Starting floating")
        }
    }

    class Boat extends Ship{
        startEngine(): void {
            console.log("Boat engine started..");
        }
        stopEngine(): void {
            console.log("Boat engine stopped :(")
        }

        engineSwitchToHandle(): void{
            console.log("Oil is finished :( Start using boat handle ...")
        }
    }

    
    class Yaht extends Ship{
        startEngine(): void {
            console.log("Yaht engine started..");
        }
        stopEngine(): void {
            console.log("Yaht engine stopped :(")
        }

        turningPartyModeOn(): void{
            console.log("Yaht turing party mode on ):...")
        }
    }

    const boat1 = new Boat()
    boat1.engineSwitchToHandle()
    boat1.float()

    const yaht1 = new Yaht()
    yaht1.startEngine()
    yaht1.float()
    yaht1.turningPartyModeOn()
}