"use strict";
{
    // type assertion
    const kgToGram = (value) => {
        if (typeof value === "number") {
            return value * 1000;
        }
        else if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return convertedValue;
        }
    };
    const result1 = kgToGram(1000); // type assertion use 'as' to fixed the type regardless the compiler
    const result2 = kgToGram("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
