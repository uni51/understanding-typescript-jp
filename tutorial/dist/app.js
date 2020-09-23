"use strict";
var _a;
var e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + (b === null || b === void 0 ? void 0 : b.toString());
    }
    return a + b;
}
var result = add("Hello", " TypeScript");
result.split(" ");
var fecthUserData = {
    id: "u1",
    name: "user1",
    job: {
        title: "Developer",
        description: "TypeScript",
    },
};
console.log((_a = fecthUserData === null || fecthUserData === void 0 ? void 0 : fecthUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = undefined;
var storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
var userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "こんにちは";
}
var errorBag = {
    email: "正しいメールアドレスではありません",
    username: "ユーザー名に記号を含めることはできません",
};
//# sourceMappingURL=app.js.map