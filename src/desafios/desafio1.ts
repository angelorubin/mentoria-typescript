interface IEmployee {
  code: number;
  name: string;
}

let employee: IEmployee = {
  code: 10,
  name: "Angelo",
};

employee.code = 10;
employee.name = "John";
