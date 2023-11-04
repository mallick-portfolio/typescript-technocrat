"use strict";
{
    // type assertion
    let anything;
    anything = true;
    anything = "Next level web development";
    anything.toUpperCase();
    const kgToGm = (value) => {
        if (typeof value == "string") {
            return `the converted value is ${Number(value) * 1000}`;
        }
        else {
            return value;
        }
    };
    let result1 = kgToGm(100);
    let result2 = kgToGm("100");
    console.log({ result1 }, { result2 });
}
