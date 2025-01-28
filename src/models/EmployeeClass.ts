import { Person } from "./personClass";

export abstract class Employee extends Person {
    monthSalary: number;
    constructor(name: string, address: string, role: string, monthSalary: number){
        super(name, address, role);
        this.monthSalary = monthSalary;
    }

    abstract AddMonthSalary(salary: number): void;
}