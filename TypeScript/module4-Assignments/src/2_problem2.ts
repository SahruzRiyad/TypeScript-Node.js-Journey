{
/*Design a TypeScript function findLargestNumber 
that takes an array of numbers and returns the largest number in the array. 
    // Sample Input:
        findLargestNumber([10, 5, 8, 20, 3])
    // Sample Output: 
           20
    */

function findLargestNumber (array: number[]): number{
    let mxNumber = -Infinity;

    for(let element of array){
        if(mxNumber < element)
            mxNumber = element;
        // mxNumber = Math.max(mxNumber,element)
    }

    return mxNumber;
}

const maxNumber = findLargestNumber([10, 5, 8, 20, 3])
console.log(`Maximum Number of the array = ${maxNumber}`)


}