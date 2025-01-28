import { Employee } from "./EmployeeClass";

export class Teacher extends Employee {
    subject: string[];
    constructor(id: number, name: string, address: string, monthSalary: number){
        super(id, name, address, "lære", monthSalary);
        this.subject = [];
    }

    AddSubject(subject: string): void {
        if(!this.subject.includes(subject)){
            this.subject.push(subject);
        }
    }

    RemoveSubject(subject: string): void{
        this.subject = this.subject.filter((item) => item != subject);
    }

    AddMonthSalary(salary: number): void {
        this.monthSalary += salary;
    }
}