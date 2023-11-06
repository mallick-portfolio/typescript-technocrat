"use strict";
{
    //
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGenerics = (param) => {
        return [param];
    };
    let gArray = createArrayWithGenerics("hello");
    let gArrayBool = createArrayWithGenerics(false);
    let user = createArrayWithGenerics({ name: "Tamal", age: 24 });
    let result1 = createArray("hellow");
    //
}
