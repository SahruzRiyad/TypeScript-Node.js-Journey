"use strict";
var _a, _b;
{
    // Ternary operator
    const age = 18;
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
    const isAdult = age >= 18 ? "adult" : "not adult"; // '?' is ternary operator for making decision
    console.log(isAdult);
    // Nullish Coalesing Operator
    // Used for null or undefined value to check 
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest"; // '??' used for nullish coalesing operator
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }, { result2 });
    const user1 = {
        name: "Sahruz",
        address: {
            city: "Khulna",
            permanentAddress: "Khulna town"
        }
    };
    const persentAddress = (_b = (_a = user1 === null || user1 === void 0 ? void 0 : user1.address) === null || _a === void 0 ? void 0 : _a.presentAddress) !== null && _b !== void 0 ? _b : "Present and Permanent address same";
    console.log({ persentAddress });
}
