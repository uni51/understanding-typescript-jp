// Code goes here!

// const names: Array<string> = []; // string[]
// // names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(" ");
// });

// TypeScriptに2つの異なる型を伝える
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergeObj.age);
