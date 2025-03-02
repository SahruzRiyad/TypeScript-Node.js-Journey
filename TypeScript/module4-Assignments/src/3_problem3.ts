{
/*Create a TypeScript function filterEvenNumbers that 
takes an array of numbers and returns a new array containing only the even 
numbers from the original array.

// Sample Input:
    filterEvenNumbers([1, 2, 3, 4, 5, 6])
// Sample Output:
    [2, 4, 6] 
*/

    const filterEvenNumbers = (numberArray: number[]): number[] =>{
        let evenNumbers: number[] = [];
        
        for(let element of numberArray){
            if((element & 1) == 0){
                evenNumbers.push(element)
            }
        }

        return evenNumbers;
    }

    const evenNumbers: number[] = filterEvenNumbers([1, 2, 3, 4, 5, 6])

    
    console.log(evenNumbers)

}