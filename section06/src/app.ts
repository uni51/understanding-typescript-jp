// 83. 交差型

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElavatedEmployee extends Employee, Admin {}

// 交差型（複数の型を結合する時に使われる）
type ElavatedEmployee = Admin & Employee;

const e1: ElavatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number; // Union型
type Numeric = number | boolean;

// CombinableとNumericの共通部分になるので、結果的に、number型のみの指定となる。
type Universal = Combinable & Numeric;

//-------------------------------------------

// 84. 型ガード

function add(a: number, b: number): number; // 関数オーバーロード
function add(a: string, b: string): string; // 関数オーバーロード
function add(a: string, b: number): string; // 関数オーバーロード
function add(a: number, b: string): string; // 関数オーバーロード
function add(a: Combinable, b: Combinable) {
  // 型ガード
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString(); // string
  }
  return a + b; // number
}

const result = add("Hello", 1);
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "user1",
  job: {
    title: "Developer",
    description: "TypeScript",
  },
};

console.log(fetchedUserData?.job?.title);

const userInput = undefined;

const storedData = userInput ?? "DEFAULT";

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(emp.name);
//   // プロパティの存在をチェック
//   if ("privileges" in emp) {
//     console.log("Privileges:" + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("StartDate:" + emp.startDate);
//   }
// }

// // printEmployeeInformation(e1);

// // printEmployeeInformation({ name: "Manu", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("運転中...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("トラックを運転中...");
//   }

//   loadCargo(amount: number) {
//     console.log("荷物を載せています..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   // if ("loadCargo" in vehicle) {
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// // 判別可能なUnion型 ------------------------------

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("移動速度: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// // // 型キャスト ------------------------------

// // const userInputElement = <HTMLInputElement>(
// //   document.getElementById("user-input")!
// // );

// // const userInputElement = document.getElementById(
// //   "user-input"
// // )! as HTMLInputElement; // !　→ エクスクラメーションマークは絶対にnullでないことを表す

// // userInputElement.value = "こんにちは";

// const userInputElement = document.getElementById("user-input");

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "こんにちは";
// }

// // インデックス型 ------------------------------

// interface ErrorContainer {
//   // id: string;
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "正しいメールアドレスではありません",
//   username: "ユーザー名に記号を含めることはできません",
// };
