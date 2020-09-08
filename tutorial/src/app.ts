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

type Combinable = string | number;
type Numeric = number | boolean;

// CombinableとNumericの共通部分になるので、結果的に、number型のみの指定となる。
type Universal = Combinable & Numeric;
