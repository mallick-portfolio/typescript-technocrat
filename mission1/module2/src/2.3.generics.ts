{
  type GenericArray<T> = Array<T>;

  // let numArray: number[] = [1, 2, 3];
  let numArray: GenericArray<number> = [1, 2, 3];
  let stringArray: GenericArray<string> = ["a", "b"];
  let boolArray: GenericArray<boolean> = [true, false];
  type User = {
    name: string;
    age: number;
  };
  const user: GenericArray<User> = [
    {
      name: "Tamal",
      age: 20,
    },
  ];
  console.log(user);
}
