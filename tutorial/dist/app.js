"use strict";
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
var userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "こんにちは";
}
var errorBag = {
    email: "正しいメールアドレスではありません",
    username: "ユーザー名に記号を含めることはできません",
};
//# sourceMappingURL=app.js.map