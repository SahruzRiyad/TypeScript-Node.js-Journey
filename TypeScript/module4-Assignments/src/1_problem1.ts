{

/* Design a TypeScript function repeatString that takes two parameters: 
    a string and a number. The function should return a new string that 
    repeats the input string the specified number of times.
    Sample Input: 
        repeatString("Hello!", 3)
    Sample Output:
        "Hello!Hello!Hello!" */

    // Normal function
    function repeatString(msg: string, frequency: number): void{
        let result: string = "";

        for(let i = 0 ; i < frequency ; i++){
            result += msg;
        }

        console.log(result)
    }

    // Using Arrow Function
    const repeatStringArrow = (msg: string, frequency: number): void =>{
        console.log(msg.repeat(frequency))
    }

    repeatString("Hello!",3)
    repeatStringArrow("Hello!",3)

}