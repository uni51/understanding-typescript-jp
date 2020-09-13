type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElavatedEmployee extends Employee, Admin {}

// 交差型
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

// 関数オーバーロード ------------------------------
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  // 型（タイプ）ガード
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b?.toString();
  }
  return a + b;
}

const result = add("Hello", " TypeScript");
result.split(" ");

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(emp.name);
//   // 型（タイプ）ガード
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }

// printEmployeeInformation({ name: "Manu", startDate: new Date() });

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
//   // 型（タイプ）ガード
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// // 判別可能なUnion型 ------------------------------
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

// 型キャスト ------------------------------

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );

// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement; // !　→ エクスクラメーションマークは絶対にnullでないことを表す

const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "こんにちは";
}

// インデックス型 ------------------------------

interface ErrorContainer {
  // id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "正しいメールアドレスではありません",
  username: "ユーザー名に記号を含めることはできません",
};
