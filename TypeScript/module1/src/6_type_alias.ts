{

// Type alias

type Student = {
    name: string,
    age: number,
    gender: string,
    contactNo?: string,
    address: string,
};


const student1: Student = {
    name: "Sahruz",
    age: 20,
    gender: "male",
    address: "khulna",
};


const student2: Student = {
    name: "Rahim",
    age: 30,
    gender: "male",
    address: "Dhaka",
    contactNo: "0129222",
};


// type alias on data types

type UserName = string
type IsAdmin = boolean
type StudentId = number

const userName: UserName = "Rahim"
const isAdmin: IsAdmin = false
const studentId: StudentId = 123

// type alias on function

type Add = (num1: number, num2: number) => number;

const add: Add = (num1,num2) => num1 + num2;


// type alias on Array

type NumberArray = number[];

const numbers: NumberArray = [1,2,3,4]

type StringOrNumberArray = (string | number)[] // Union types array

const mixedArray: StringOrNumberArray = ["hello", 123, "hfld", 2, 3, "ok"]

}