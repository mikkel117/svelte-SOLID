import type { IPerson } from './interfaces/PersonInterface';
import { GradeManager } from './managers/GradeManager';
import { SubjectManager } from './managers/SubjectManager';

export interface IStudent extends IPerson {
	stundentClass: string;
	subject: SubjectManager;
	grade: GradeManager;
}

export class Stundent implements IStudent {
	id: number;
	name: string;
	address: string;
	role: string;
	readonly stundentClass: string;
	subject: SubjectManager;
	grade: GradeManager;

	constructor(id: number, name: string, address: string, stundentClass: string) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.role = 'elev';
		this.stundentClass = stundentClass;
		this.subject = new SubjectManager();
		this.grade = new GradeManager();
	}
}
