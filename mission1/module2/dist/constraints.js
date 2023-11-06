"use strict";
{
    const addStudent = (student) => {
        let course = "Next level developer";
        return Object.assign(Object.assign({}, student), { course });
    };
    let student1 = addStudent({
        id: 1,
        name: "Tamal",
        age: 25,
        ja: "skddjf",
    });
    let student2 = addStudent({
        id: 1,
        name: "Tamal",
        age: 25,
        ja: "skddjf",
    });
}
