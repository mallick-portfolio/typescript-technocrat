{
  type User = {
    id: number;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    contactNo: string;
    address: String;
  };
  let user: User = {
    id: 12,
    name: {
      firstName: "Tamal",
      middleName: "Kamal",
      lastName: "Mallick",
    },
    contactNo: "030w2",
    address: "Dhaka",
  };

  // distructuring this object
  const {
    id,
    name: { firstName, lastName, middleName },
  } = user;

  // array destructuring
  const friends: string[] = ["Tamal", "amal"];
  const [, b] = friends;
  
}
