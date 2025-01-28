import { Employee } from "./EmployeeClass";

interface studentInterface {
    id: number;
    name: string;
}

export class AdminStaff extends Employee {
    monthSalary: number;
    students: studentInterface[];
    constructor(id: number, name: string, address: string, monthSalary: number){
        super(id, name, address, "admin", monthSalary);
        this.monthSalary = monthSalary;
        this.students = [];
    }

    AddMonthSalary(salary: number): void {
        this.monthSalary += salary;
    }

    AddStudent(student: studentInterface): void {
        if(!this.students.some((item) => item.id === student.id)){
            this.students.push(student);
        }
    }

    moveStudent(student: studentInterface, otherAdminStaff: AdminStaff): void {
        otherAdminStaff.AddStudent(student);
        this.RemoveStudent(student);
    }

    RemoveStudent(student: studentInterface): void{
        this.students = this.students.filter((item) => item.id != student.id);
    }
}