{
  //
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  let gArray = createArrayWithGenerics<string>("hello");
  let gArrayBool = createArrayWithGenerics<boolean>(false);
  interface User {
    name: string;
    age: number;
  }
  let user = createArrayWithGenerics<User>({ name: "Tamal", age: 24 });

  let result1 = createArray("hellow");

  //
}
