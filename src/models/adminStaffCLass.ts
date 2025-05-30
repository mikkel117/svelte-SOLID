import { Employee } from './EmployeeClass';
import { Stundent } from './StudentClass';

export class AdminStaff extends Employee {
	monthSalary: number;
	students: Stundent[];
	constructor(id: number, name: string, address: string, monthSalary: number) {
		super(id, name, address, 'admin', monthSalary);
		this.monthSalary = monthSalary;
		this.students = [];
	}

	addMonthSalary(salary: number): void {
		this.monthSalary += salary;
	}

	addStudent(student: Stundent): void {
		if (!this.students.some((item) => item.id === student.id)) {
			this.students.push(student);
		}
	}

	moveStudent(student: Stundent, otherAdminStaff: AdminStaff): void {
		otherAdminStaff.addStudent(student);
		this.RemoveStudent(student);
	}

	RemoveStudent(student: Stundent): void {
		this.students = this.students.filter((item) => item.id != student.id);
	}
}
