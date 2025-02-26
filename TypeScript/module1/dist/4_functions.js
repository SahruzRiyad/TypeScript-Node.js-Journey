"use strict";
//Normal Function
//Arrow Function
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(2, 3);
//Arrow
const addArrow = (num1, num2) => num1 + num2;
addArrow(2, 3);
// object -> function = Method
const poorUser = {
    name: "Riyad",
    balance: 0,
    addBalance(balance) {
        return 'My new balance is : ${this.balance + balance}';
    },
};
const arr = [1, 2, 3];
const newArray = arr.map((elem) => elem * elem);
