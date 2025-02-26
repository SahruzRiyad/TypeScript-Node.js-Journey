//Normal Function
//Arrow Function

function add(num1: number , num2: number = 10): number{
    return num1 + num2;
}

add(2,3)

//Arrow

const addArrow = (num1: number , num2: number): number => num1 + num2;

addArrow(2,3)

// object -> function = Method

const poorUser = {
    name: "Riyad",
    balance: 0,

    addBalance(balance: number): string{
        return 'My new balance is : ${this.balance + balance}';
    },
}

const arr: number[] = [1,2,3]

const newArray: number[] = arr.map((elem: number): number => elem * elem)