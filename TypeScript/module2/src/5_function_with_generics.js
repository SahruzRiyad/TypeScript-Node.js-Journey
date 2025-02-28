"use strict";
{
    // Function with generics
    const createArray = (param) => {
        return [param];
    };
    // Generic Function
    const createArrayGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    const res2 = createArrayGeneric(true);
    const resGenericObj = createArrayGeneric({ id: 123, name: "SHAKIL" });
    // Another function example
    const addCourseToStudent = (student) => {
        const course = "Typescript.js and Node.js";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: "Mr.S", birthYear: 1998, hasWatch: true });
    const student2 = addCourseToStudent({ name: "Mr.Y", birthYear: 1996, hasCar: true });
    console.log({ student1 });
    console.log({ student2 });
    // function tuple
    const createArrayGenericTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res3 = createArrayGenericTuple("Bangladesh", "USA");
    const resGenericObjTuple = createArrayGenericTuple("Bangladesh", { continent: "Asia", population: 16e9 });
}
