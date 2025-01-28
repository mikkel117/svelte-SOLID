import { Employee } from "./EmployeeClass";

export class Teacher extends Employee {
    subject: string[];
    classAndSubject: Record<string, string[]>;
    constructor(name: string, address: string, monthSalary: number){
        super(name, address, "lære", monthSalary);
        this.subject = [];
        this.classAndSubject = {};
    }

    AddSubject(subject: string): void {
        if(!this.subject.includes(subject)){
            this.subject.push(subject);
        }
    }

    RemoveSubject(subject: string): void{
        this.subject = this.subject.filter((item) => item != subject);
    }

    AddClass(classe: string, subject: string): void {
        if(this.classAndSubject[classe].includes(subject)){
            this.classAndSubject[classe].push(subject);
        }
    }

    AddMonthSalary(salary: number): void {
        this.monthSalary += salary;
    }
}