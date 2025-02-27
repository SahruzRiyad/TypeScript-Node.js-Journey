{

// Constraints
const addCourseToStudent = <T extends {id: number, name: string}> (student: T) => { // extends used for constraints
    const course: string = "Typescript.js and Node.js"

    return {
        ...student,
        course
    }
}


const student1 = addCourseToStudent<{id: number, name: string, birthYear: number, hasWatch: boolean}>
    ({id: 123, name: "Mr.S" , birthYear: 1998, hasWatch: true})

const student2 = addCourseToStudent<{id: number, name: string, birthYear: number, hasCar: boolean}>
    ({id: 234, name: "Mr.Y" , birthYear: 1996, hasCar: true})

const student3 = addCourseToStudent<{id: number, name: string}>
    ({id: 234, name: "Mr.Y"})

console.log( {student1})
console.log( {student2})
console.log( {student3})

}