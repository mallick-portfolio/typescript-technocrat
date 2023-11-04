{
  // ternary operator || optional operator || nullish coalescing
  let age: number = 18;
  let isAdult = age >= 18 ? "Adult" : "Not adult";
  console.log(isAdult);

  // nullish coalescing operator
  // if null and undefined then for decesion making
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? "" : "Guest";

  // optional chaining as nullish coalescing operator
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      permanentAddress: string;
      currentAddress?: string;
    };
  };
  let user: User = {
    name: "Tamal",
    address: {
      city: "Dhaka",
      road: "Khunla",
      permanentAddress: "abc",
    },
  };
  let Tamal = user?.address?.currentAddress ?? "No current address found";
  console.log({ Tamal });
}
