{
  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      price: number;
    };
    smartWatch: T;
  }

  type Watch = {};
  interface Emaila {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper: Developer<Emaila> = {
    name: "Tamal",
    computer: {
      brand: "HP",
      model: "22",
      price: 1234,
    },
    smartWatch: {
      brand: "Emaila",
      model: "kkw",
      display: "OLED",
    },
  };

  //
}
