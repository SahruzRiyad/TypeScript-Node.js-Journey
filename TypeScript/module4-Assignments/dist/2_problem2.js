{
    /*Design a TypeScript function findLargestNumber
    that takes an array of numbers and returns the largest number in the array.
        // Sample Input:
            findLargestNumber([10, 5, 8, 20, 3])
        // Sample Output:
               20
        */
    function findLargestNumber(array) {
        var mxNumber = -Infinity;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var element = array_1[_i];
            if (mxNumber < element)
                mxNumber = element;
            // mxNumber = Math.max(mxNumber,element)
        }
        return mxNumber;
    }
    var maxNumber = findLargestNumber([10, 5, 8, 20, 3]);
    console.log("Maximum Number of the array = ".concat(maxNumber));
}
