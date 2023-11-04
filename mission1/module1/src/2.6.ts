// typescript with function

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
console.log(add(3));

// arrow function with typescript
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

// object with modhod in typescript

let lowUser: {
  firstName: string;
  balance: number;
  addBalance: Function;
} = {
  firstName: "Tamal",
  balance: 0,
  addBalance(bal: number): number {
    return this.balance + bal;
  },
};

const cArray = [1, 2, 3, 4, 5];
const newArray: number[] = cArray.map(
  (element: number): number => element * element
);
