var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car.prototype.startEngine = function () {
            console.log("Car Engine started");
        };
        Car.prototype.stopEngine = function () {
            console.log("Car Engine stopped");
        };
        Car.prototype.move = function () {
            console.log("Car is on the move");
        };
        Car.prototype.switchingEngine = function () {
            console.log("I am swithching the Engine");
        };
        return Car;
    }());
    var audiCar = new Car();
    audiCar.startEngine();
    // Abstract example
    var Ship = /** @class */ (function () {
        function Ship() {
        }
        Ship.prototype.float = function () {
            console.log("Starting floating");
        };
        return Ship;
    }());
    var Boat = /** @class */ (function (_super) {
        __extends(Boat, _super);
        function Boat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boat.prototype.startEngine = function () {
            console.log("Boat engine started..");
        };
        Boat.prototype.stopEngine = function () {
            console.log("Boat engine stopped :(");
        };
        Boat.prototype.engineSwitchToHandle = function () {
            console.log("Oil is finished :( Start using boat handle ...");
        };
        return Boat;
    }(Ship));
    var Yaht = /** @class */ (function (_super) {
        __extends(Yaht, _super);
        function Yaht() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Yaht.prototype.startEngine = function () {
            console.log("Yaht engine started..");
        };
        Yaht.prototype.stopEngine = function () {
            console.log("Yaht engine stopped :(");
        };
        Yaht.prototype.turningPartyModeOn = function () {
            console.log("Yaht turing party mode on ):...");
        };
        return Yaht;
    }(Ship));
    var boat1 = new Boat();
    boat1.engineSwitchToHandle();
    boat1.float();
    var yaht1 = new Yaht();
    yaht1.startEngine();
    yaht1.float();
    yaht1.turningPartyModeOn();
}
