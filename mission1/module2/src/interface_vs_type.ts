{
  // type
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };
  // we can do same thing using interface
  interface User2 {
    name: string;
    age: number;
  }

  // if we can do same thing using interface then we can extends
  interface UserWithRole2 extends User2 {
    role?: string;
  }

  let user: UserWithRole2 = {
    name: "Tamal",
    age: 24,
    role: "admin",
  };

  // array interface
  type NumArray = number[];
  let numArray: NumArray = [1, 2, 3, 4, 5];

  // we can do same things using interface
  interface NumArray2 {
    [index: number]: number;
  }

  let numArray2: NumArray2 = [1, 2, 3, 4, 5];
  console.log(numArray, numArray2);

  // interface in function
  type Add = (num1: number, num2: number) => number;
  // using interface
  interface Sum {
    (num1: number, num2: number): number;
  }
  let add: Sum = (num1, num2): number => {
    return num1 + num2;
  };
}
