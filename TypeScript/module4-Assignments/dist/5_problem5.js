{
    var calculateAverageGrade = function (student) {
        var sum = student.grades.reduce(function (acc, curr) { return acc + curr; }, 0);
        if (student.grades.length == 0)
            return 0;
        return parseFloat((sum / student.grades.length).toFixed(2));
    };
    var student1 = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90]
    };
    var student2 = {
        name: "Alice",
        age: 17,
        grades: [50, 40, 10]
    };
    var averageGradeForBob = calculateAverageGrade(student1);
    console.log(averageGradeForBob);
    console.log(calculateAverageGrade(student2));
}
