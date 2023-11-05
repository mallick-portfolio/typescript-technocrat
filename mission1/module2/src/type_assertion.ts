{
  let anything: any;
  anything = "Next level developer";
  let newString: string = (anything as string).toLowerCase();

  //
  let kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      return `The converted value is ${Number(value) * 1000}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };
  let result1: number = kgToGram(100) as number;
  let result2: string = kgToGram("100") as string;

  //  assertion for error handling
  type CustomError = {
    name: string;
    stack: string;
    status: number;
    message: string;
  };

  try {
    throw new Error("Anfsdfdsfsdf");
  } catch (error) {
    let err = error as CustomError;
    console.table([err.message, err.name, err.stack]);
  }
}
