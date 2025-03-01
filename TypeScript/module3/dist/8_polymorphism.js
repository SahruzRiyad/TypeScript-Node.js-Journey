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
    // Polymorphism
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.getSleep = function () {
            console.log("I am sleeping for 8 hours.");
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Student.prototype.getSleep = function () {
            console.log("I am sleeping for 7 hours.");
        };
        return Student;
    }(Person));
    var Develper = /** @class */ (function (_super) {
        __extends(Develper, _super);
        function Develper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Develper.prototype.getSleep = function () {
            console.log("I am sleeping for 6 hours.");
        };
        return Develper;
    }(Person));
    var getSleepHours = function (param) {
        param.getSleep();
    };
    var person1 = new Person();
    var person2 = new Student();
    var person3 = new Develper();
    getSleepHours(person1);
    getSleepHours(person2);
    getSleepHours(person3);
    var Shape = /** @class */ (function () {
        function Shape() {
        }
        Shape.prototype.getArea = function () {
            return 0;
        };
        return Shape;
    }());
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(radius) {
            var _this = _super.call(this) || this;
            _this.radius = radius;
            return _this;
        }
        Circle.prototype.getArea = function () {
            return Math.PI * this.radius * this.radius;
        };
        return Circle;
    }(Shape));
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle(height, width) {
            var _this = _super.call(this) || this;
            _this.height = height;
            _this.width = width;
            return _this;
        }
        Rectangle.prototype.getArea = function () {
            return this.height * this.width;
        };
        return Rectangle;
    }(Shape));
    var getShapeArea = function (param) {
        console.log(param.getArea().toFixed(2));
    };
    var shape1 = new Shape();
    var shape2 = new Circle(3);
    var shape3 = new Rectangle(3, 4);
    getShapeArea(shape1);
    getShapeArea(shape2);
    getShapeArea(shape3);
}
