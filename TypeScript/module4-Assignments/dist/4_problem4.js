{
    /* Design a TypeScript function reverseArray that
    takes an array of any type and returns a new array with its elements reversed.
    Use generics to define types.
        // Sample Input 1:
            reverseArray(["apple", "banana", "cherry"])
        // Sample Output 1:
            ["cherry", "banana", "apple"]
        // Sample Input 2:
            reverseArray([10, 20, 30])
        // Sample Output 2:
            [30, 20, 10]
    */
    var reverseArray = function (arr) {
        var len = arr.length;
        for (var i = 0; i < len / 2; i++) {
            var tmp = arr[i];
            arr[i] = arr[len - i - 1];
            arr[len - i - 1] = tmp;
        }
        return arr;
    };
    var input1 = ["apple", "banana", "cherry"];
    console.log(reverseArray(input1));
    console.log(reverseArray([10, 20, 30]));
}
