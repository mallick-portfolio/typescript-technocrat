{
  // function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };
  let numberAr = createArrayWithGenerics<number>(3);
}
