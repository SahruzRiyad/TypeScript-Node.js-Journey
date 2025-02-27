{

    // type
type User2 = {
    name: string,
    age: number,
};


type UserWithRole1 = User2 & { role: string };

const roleUser: UserWithRole1 = {
    name: "riyad",
    age: 20,
    role: "student"
}

// interface
interface User1 {
    name: string,
    age: number,
};

interface UserWithRole2 extends User1 {
    role: string
}

const roleuser2: UserWithRole2 = {
    name: "Akash",
    age: 1233,
    role: 'manager',
};


// In array

type Roll1 = number[];

interface Roll2 {
    [index: number] : number
}

const rollNumber1: Roll1 = [1,2,3]
const rollNumber2: Roll2 = [3,4,5]


// In function

type Add = (num1: number , num2: number) => number

interface Add2 {
    (num1: number , num2: number) : number
}

const add: Add = (num1, num2) => num1 + num2;
const add2: Add2 = (num1, num2) => num1 + num2;

}