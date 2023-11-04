"use strict";
{
    let user = {
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
    const { id, name: { firstName, lastName, middleName }, } = user;
    // array destructuring
    const friends = ["Tamal", "amal"];
    const [, b] = friends;
}
