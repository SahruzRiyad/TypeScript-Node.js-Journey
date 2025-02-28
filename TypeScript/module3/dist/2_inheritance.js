"use strict";
{
    // Inheritance in OOP
    class SchoolMember {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours) {
            console.log(`${this.name} sleeps for ${numberOfHours} hours`);
        }
    }
    class Student extends SchoolMember {
        constructor(name, age, address, studentId) {
            super(name, age, address);
            this.studentId = studentId;
        }
    }
    class Teacher extends SchoolMember {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numberOfClass) {
            console.log(`${this.name} takes ${numberOfClass} classes`);
        }
    }
    const student1 = new Student("Rahim", 29, "Bangladesh", 123);
    student1.getSleep(10);
    const teacher1 = new Teacher("Dr. Karim", 40, "Bangladesh", "Professor");
    teacher1.takeClass(2);
}
