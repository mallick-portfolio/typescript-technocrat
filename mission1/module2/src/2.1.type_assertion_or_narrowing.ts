{
  // type assertion
  let anything: any;
  anything = true;

  anything = "Next level web development";
  (anything as string).toUpperCase();

  const kgToGm = (value: string | number): number | string | undefined => {
    if (typeof value == "string") {
      return `the converted value is ${Number(value) * 1000}`;
    } else {
      return value;
    }
  };
  let result1 = kgToGm(100) as number;
  let result2 = kgToGm("100") as string;
  console.log({ result1 }, { result2 });
}
