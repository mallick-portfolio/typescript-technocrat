// Spreed operator and distructuring
{
  // spread operator
  const users1: string[] = ["Tamal", "Kamal"];
  const user2: string[] = ["Amit", "Sumit"];
  users1.push(...user2);

  // rest opeartor
  const greetFriends = (
    friend1: string,
    friend2: string,
    ...rest: string[]
  ): string[] => {
    let allFriends = rest;
    allFriends.push(friend1);
    allFriends.push(friend2);
    return allFriends;
  };


  // distructure from object
  
}
