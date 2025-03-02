{
    /*Create a TypeScript function filterEvenNumbers that
    takes an array of numbers and returns a new array containing only the even
    numbers from the original array.
    
    // Sample Input:
        filterEvenNumbers([1, 2, 3, 4, 5, 6])
    // Sample Output:
        [2, 4, 6]
    */
    var filterEvenNumbers = function (numberArray) {
        var evenNumbers = [];
        for (var _i = 0, numberArray_1 = numberArray; _i < numberArray_1.length; _i++) {
            var element = numberArray_1[_i];
            if ((element & 1) == 0) {
                evenNumbers.push(element);
            }
        }
        return evenNumbers;
    };
    var evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
    console.log(evenNumbers);
}
