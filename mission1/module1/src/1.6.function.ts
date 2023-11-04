{
  function add(num1: string, num2: number) {
    return num1 + num2;
  }

  console.log(add("2", 4));

  // arrow function

  const sum = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  // callback function data type
  let numbers: number[] = [1, 2, 3, 4];
  let doubleNumbers: number[] = numbers.map((num: number): number => num * 2);

  //
  type User = {
    firstName: string;
    lastName: string;
    balance: number;
    addBalance: (balance: number) => number;
  };

  const user: User = {
    firstName: "Tamal",
    lastName: "Mallick",
    balance: 0,
    addBalance(balance: number) {
      return this.balance + balance;
    },
  };
}
