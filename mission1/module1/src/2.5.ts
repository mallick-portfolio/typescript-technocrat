type User = {
  firstName: string;
  middleName?: string;
  lastName: string;
  readonly company: "Programming hero"; // -> this is call literal type
};

const user: User = {
  firstName: "Tamal",
  lastName: "Mallick",
  company: "Programming hero",
};
