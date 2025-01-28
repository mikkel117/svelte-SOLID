import { Person } from "./personClass";

export class stundent extends Person {
    stundentClass: string;
    subject: string[];
    grade: Record<string, number>;
    constructor(name: string, address: string, stundentClass: string){
        super(name, address, "elev");
        this.stundentClass = stundentClass
        this.subject = [];
        this.grade = {};
    }

    AddStudentToSubject(subject: string): void {
        if(!this.subject.includes(subject)){
            this.subject.push(subject);
        }
    }

    RemoveStudentFromSubject(subject: string): void{
        this.subject = this.subject.filter((item) => item != subject);
    }

    GIveGrade(subject: string, grade: number): void {
        if(this.subject.includes(subject)){
            this.grade[subject] = grade;
        }
    }

    UpdateGrade(subject: string, grade: number): void{
        if(this.subject.includes(subject)){
            this.grade[subject] = grade;
        }
    }

    calculatAverageGrade(): number {
        const grades = Object.values(this.grade);
        if (grades.length === 0) return 0;
        return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    }
}