{

// Generic type

type GenericArray <T> = Array <T>

// const numberArray: number[] = [1,2,3,4]
// const numberArray: Array <number>  = [1,2,3,4]
const numberArray: GenericArray <number>  = [1,2,3,4]

// const stringArray: string[] = ["AB", "ACC", "Dd"]
// const stringArray: Array <string> = ["AB", "ACC", "Dd"]
const stringArray: GenericArray <string> = ["AB", "ACC", "Dd"]

// const booleanArray: boolean[] = [true, false, true]
// const booleanArray: Array <boolean> = [true, false, true]
const booleanArray: GenericArray <boolean> = [true, false, true]

// generic object
const user: GenericArray <{name:string, age: number}> = [
    {
        name: "Sahruz",
        age: 40
    },
    {
        name: "Rahim",
        age: 50
    },
]

//generic tuple

type GenericTuple <X,Y> = [X, Y]

// const fruits: [string,string] = ["Apple", "Orange"] // normal tuple
const fruits: GenericTuple <string,string> = ["Apple", "Orange"]

const userWithObject: GenericTuple <number,{name:string, email: string}> = [1234,{name: "riyad", email: "a@gmail.com"}] 

}