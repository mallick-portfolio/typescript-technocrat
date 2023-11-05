"use strict";
{
    let anything;
    anything = "Next level developer";
    let newString = anything.toLowerCase();
    //
    let kgToGram = (value) => {
        if (typeof value === "string") {
            return `The converted value is ${Number(value) * 1000}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    let result1 = kgToGram(100);
    let result2 = kgToGram("100");
    try {
        throw new Error("Anfsdfdsfsdf");
    }
    catch (error) {
        let err = error;
        console.table([err.message, err.name, err.stack]);
    }
}
