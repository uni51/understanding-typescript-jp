abstract class Deaprtment {
  static fiscalYear = 2020;
  // private readonly id: string;
  // name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    console.log(Deaprtment.fiscalYear);
  }

  abstract describe(this: Deaprtment): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Deaprtment {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, `IT`);
    this.admins = admins;
  }

  describe() {
    console.log("IT部門 - ID: " + this.id);
  }
}

class AccountingDepartment extends Deaprtment {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません。");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください。");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, `Accounting`);
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("会計部門 - ID: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Deaprtment.createEmployee("Taro");
console.log(employee1, Deaprtment.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = "Anna";

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = "通期会計レポート";
accounting.addReport("Something");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
