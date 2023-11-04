"use strict";
{
    function add(num1, num2) {
        return num1 + num2;
    }
    console.log(add("2", 4));
    // arrow function
    const sum = (num1, num2) => {
        return num1 + num2;
    };
    // callback function data type
    let numbers = [1, 2, 3, 4];
    let doubleNumbers = numbers.map((num) => num * 2);
    const user = {
        firstName: "Tamal",
        lastName: "Mallick",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        },
    };
}
