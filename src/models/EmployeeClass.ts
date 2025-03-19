import type { IPerson } from './interfaces/PersonInterface';

export interface IEmployee extends IPerson {
	monthSalary: number;
	addMonthSalary(salary: number): void;
}

export abstract class Employee implements IEmployee {
	id: number;
	name: string;
	address: string;
	role: string;
	monthSalary: number;
	constructor(id: number, name: string, address: string, role: string, monthSalary: number) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.role = role;
		this.monthSalary = monthSalary;
	}

	abstract addMonthSalary(salary: number): void;
}
