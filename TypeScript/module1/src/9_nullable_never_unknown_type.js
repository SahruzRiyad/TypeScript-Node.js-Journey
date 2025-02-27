"use strict";
{
    // Nullable types
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);
    // Unknown types -> typeof
    const getSpeed = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is of ${value}  = ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === "string") {
            const [speed, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(speed) * 1000) / 3600;
            console.log(`The speed is of ${value} = ${convertedSpeed} ms^-1`);
        }
        else {
            console.log("Input Fromat is not allowed");
        }
    };
    getSpeed(1000);
    getSpeed(`1000 kmph`);
    getSpeed(null);
    // Never types -> never return anything
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("Error occurs in the process.");
}
