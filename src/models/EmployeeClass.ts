import { Person } from "./PersonClass";

export abstract class Employee extends Person {
    monthSalary: number;
    constructor(id: number, name: string, address: string, role: string, monthSalary: number){
        super(id, name, address, role);
        this.monthSalary = monthSalary;
    }

    abstract AddMonthSalary(salary: number): void;
}