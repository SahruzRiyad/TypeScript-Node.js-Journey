{
// Inheritance in OOP

class SchoolMember {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
        this.name = name
        this.age = age
        this.address = address
    }

    getSleep(numberOfHours: number){
        console.log(`${this.name} sleeps for ${numberOfHours} hours`)
    }
}

class Student extends SchoolMember{
    studentId: number;

    constructor(name: string, age: number, address: string, studentId: number){
        super(name,age,address)
        this.studentId = studentId
    }
}

class Teacher extends SchoolMember{
    designation: string;

    constructor(name: string, age: number, address: string, designation: string){
        super(name,age,address)
        this.designation = designation
    }

    takeClass(numberOfClass: number){
        console.log(`${this.name} takes ${numberOfClass} classes`)
    }
}


const student1 = new Student("Rahim",29,"Bangladesh",123)
student1.getSleep(10)

const teacher1 = new Teacher("Dr. Karim", 40, "Bangladesh", "Professor")
teacher1.takeClass(2)

}