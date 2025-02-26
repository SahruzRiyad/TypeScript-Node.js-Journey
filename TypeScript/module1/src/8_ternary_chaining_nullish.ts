{

// Ternary operator

const age: number = 18

if(age >= 18){
    console.log("Adult")
} else{
    console.log("Not Adult")
}

const isAdult = age >= 18 ? "adult" : "not adult"; // '?' is ternary operator for making decision
console.log(isAdult)


// Nullish Coalesing Operator
// Used for null or undefined value to check 

const isAuthenticated = ""

const result1 = isAuthenticated ?? "Guest"; // '??' used for nullish coalesing operator
const result2 = isAuthenticated ? isAuthenticated : "Guest";

console.log({ result1 } , { result2 })


type User = {
    name: string,
    address: {
        city: string,
        road?: string,
        presentAddress?: string,
        permanentAddress: string,
    }
};

const user1: User = {
    name: "Sahruz",
    address: {
        city: "Khulna",
        permanentAddress: "Khulna town"
    }
};

const persentAddress = user1?.address?.presentAddress ?? "Present and Permanent address same";
console.log({ persentAddress })


}