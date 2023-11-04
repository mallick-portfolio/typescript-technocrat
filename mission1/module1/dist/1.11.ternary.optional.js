"use strict";
var _a, _b;
{
    // ternary operator || optional operator || nullish coalescing
    let age = 18;
    let isAdult = age >= 18 ? "Adult" : "Not adult";
    console.log(isAdult);
    // nullish coalescing operator
    // if null and undefined then for decesion making
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? "" : "Guest";
    let user = {
        name: "Tamal",
        address: {
            city: "Dhaka",
            road: "Khunla",
            permanentAddress: "abc",
        },
    };
    let Tamal = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.currentAddress) !== null && _b !== void 0 ? _b : "No current address found";
    console.log({ Tamal });
}
