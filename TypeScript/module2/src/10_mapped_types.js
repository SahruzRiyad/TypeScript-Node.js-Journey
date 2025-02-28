"use strict";
{
    // Mapped types
    const numberArray = [1, 2, 3, 4];
    const stringArray = ["1", "2", "3", "4"];
    const convertNumberToString = numberArray.map(number => number.toString());
    console.log(convertNumberToString);
    const area1 = {
        height: 100,
        widht: 60,
        name: "rectangle",
        isShape: true
    };
    console.log({ area1 });
}
