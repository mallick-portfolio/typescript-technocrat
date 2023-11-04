"use strict";
// Spreed operator and distructuring
{
    // spread operator
    const users1 = ["Tamal", "Kamal"];
    const user2 = ["Amit", "Sumit"];
    users1.push(...user2);
    // rest opeartor
    const greetFriends = (friend1, friend2, ...rest) => {
        let allFriends = rest;
        allFriends.push(friend1);
        allFriends.push(friend2);
        return allFriends;
    };
    // distructure from object
}
