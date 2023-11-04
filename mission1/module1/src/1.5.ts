{
  type User = {
    firstName: string;
    middleName?: string;
    lastName: string;
    age: number;
    nationality: string;
    isStudent: boolean;
    readonly company?: "Bangladeshi"; //-> literal data type
  };

  const user: User = {
    firstName: "Tamal",
    lastName: "Mallick",
    age: 23,
    nationality: "Bangladesh",
    isStudent: true,
  };
  const use1r: User = {
    firstName: "Amit",
    lastName: "Mallick",
    age: 23,
    nationality: "Bangladesh",
    isStudent: true,
    company: "Bangladeshi",
  };
}
