{
  type User1 = {
    name: string;
    age: number;
  };
  type UserWIthRole1 = User1 & { role: string };
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWIthRole2 extends User2 {
    role: string;
  }

  let user: UserWIthRole2 = {
    name: "tamal",
    age: 20,
    role: "Developer",
  };

  // we can use type alias for premetive data type but we can't use interface for premetive data type

  // js --> object , array -->object, function -->object

  // interface for array
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  let roll1: Roll2 = [1, 2, 3];

  //interface for function
  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => {
    return num1 + num2;
  };
}
