{

// Constraints using keyof operator

type Vehicle = {
    bike: string,
    car: string,
    ship: string,
}

type OwnerManulllyAssign = "bike" | "car" | "ship"; // assigned manually

type Owner = keyof Vehicle

// const getPropertyValue = <T, Q extends "name" | "age" | "email"> (obj: Text, value: Q) => {

// }

const getPropertyValue = <T, Q extends keyof T> (obj: T, key: Q) => {
    return obj[key]
}

const user = {
    name: "Sarhuz",
    age: 20,
    email: "abc@gmail.com"
}

const car = {
    name: "AUDI",
    model: "XY_25"
}

const res1 = getPropertyValue(user,"email")
const res2 = getPropertyValue(car, "name")

console.log(res1)
console.log(res2)


}