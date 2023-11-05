{
  // generic with interface
  type Computer = {
    brand: string;
    model: string;
    price: number;
  };

  interface Developer<T, B = null> {
    name: string;
    computer: Computer;
    smartWatch: T;
    bike?: B;
  }

  interface EmalaWatch {
    brand: string;
    model: string;
  }

  let poorDeveloper: Developer<EmalaWatch> = {
    name: " Tamal",
    computer: {
      brand: "Dell",
      model: "latidude",
      price: 38000,
    },
    smartWatch: {
      brand: "Emaila",
      model: "ex33",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  type Yemaha = {
    brand: string;
    model: string;
    price: number;
  };
  let richDeveloper: Developer<AppleWatch, Yemaha> = {
    name: " Tamal",
    computer: {
      brand: "Dell",
      model: "latidude",
      price: 38000,
    },
    smartWatch: {
      brand: "Apple watch",
      model: "app44",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Ym",
      model: "fsd",
      price: 32345,
    },
  };
  console.log(poorDeveloper);
}
