"use strict";
{
    // const getPropertyValue = <T, Q extends "name" | "age" | "email"> (obj: Text, value: Q) => {
    // }
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Sarhuz",
        age: 20,
        email: "abc@gmail.com"
    };
    const car = {
        name: "AUDI",
        model: "XY_25"
    };
    const res1 = getPropertyValue(user, "email");
    const res2 = getPropertyValue(car, "name");
    console.log(res1);
    console.log(res2);
}
