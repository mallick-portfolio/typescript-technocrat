{
  type GenericArray<T> = Array<T>;
  // let numArray: number[] = [1, 2, 3, 4];
  let numArray: GenericArray<number> = [1, 2, 3, 4];

  // let stringArray: string[] = ["A", "B"];
  let stringArray: GenericArray<string> = ["A", "B"];

  // let boolArray: boolean[] = [true, false];
  let boolArray: GenericArray<boolean> = [true, false];

  type Student = { name: string; age: number; is_student?: boolean };

  let users: GenericArray<Student> = [
    {
      name: "Tamal",
      age: 25,
    },
  ];

  // generic in tuple
  type GenericTuple<X, Y> = [X, Y];
  let ms: GenericTuple<string, string> = ["MS.x", "MS.y"];
}
