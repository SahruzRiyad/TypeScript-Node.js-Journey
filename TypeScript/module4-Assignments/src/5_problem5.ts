{
/*You are given an object called “student” representing a student's information 
with the following properties: name (string), age (number), and grades (array of numbers).
Make an interface using given properties. Write a TypeScript function called 
calculateAverageGrade that takes this student object as input and calculates 
the average grade.

Hints: Use a reduce() method to sum the grades. average = total grades/ total length

// Sample Input:
const student1: Student = {     
			    name: "Bob",     
			    age: 17,     
			    grades: [75, 80, 82, 88, 90]
            };
const averageGradeForBob = calculateAverageGrade(student1);
// Sample Output:
        83 */

    type Student = {
        name: string;
        age: number;
        grades: number[];
    };

    const  calculateAverageGrade = (student: Student): number=>{
        const sum = student.grades.reduce((acc: number,curr: number)=> acc + curr, 0);

        if(student.grades.length == 0)
            return 0;
        
        return parseFloat((sum / student.grades.length).toFixed(2));
    } 

    const student1: Student = {     
        name: "Bob",     
        age: 17,     
        grades: [75, 80, 82, 88, 90]
    };

    const student2: Student = {     
        name: "Alice",     
        age: 17,     
        grades: [50,40,10]
    };

    const averageGradeForBob = calculateAverageGrade(student1);

    console.log(averageGradeForBob);
    console.log(calculateAverageGrade(student2));

}