"use strict";
{
    // Constraints
    const addCourseToStudent = (student) => {
        const course = "Typescript.js and Node.js";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 123, name: "Mr.S", birthYear: 1998, hasWatch: true });
    const student2 = addCourseToStudent({ id: 234, name: "Mr.Y", birthYear: 1996, hasCar: true });
    const student3 = addCourseToStudent({ id: 234, name: "Mr.Y" });
    console.log({ student1 });
    console.log({ student2 });
    console.log({ student3 });
}
