{

// Function with generics

const createArray = (param: string): string[] =>{
    return [param]
}

// Generic Function
const createArrayGeneric = <T> (param: T): T[] =>{
    return [param]
}

const res1 = createArray("Bangladesh")
const res2 = createArrayGeneric <boolean> (true)

type User = {id: number, name: string};
const resGenericObj = createArrayGeneric<User>({id: 123, name: "SHAKIL"})

// Another function example
const addCourseToStudent = <T> (student: T) => {
    const course: string = "Typescript.js and Node.js"

    return {
        ...student,
        course
    }
}


const student1 = addCourseToStudent<{name: string, birthYear: number, hasWatch: boolean}>
    ({name: "Mr.S" , birthYear: 1998, hasWatch: true})

const student2 = addCourseToStudent<{name: string, birthYear: number, hasCar: boolean}>
    ({name: "Mr.Y" , birthYear: 1996, hasCar: true})

console.log( {student1})
console.log( {student2})

// function tuple
const createArrayGenericTuple = <T, Q> (param1: T, param2: Q) : [T, Q] =>{
    return [param1, param2]
}


const res3 = createArrayGenericTuple <string,string >("Bangladesh", "USA")
const resGenericObjTuple = createArrayGenericTuple <string,{continent: string, population: number} >("Bangladesh", 
    {continent: "Asia",population: 16e9})





}