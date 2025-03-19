export class GradeManager {
	private grades: Record<string, number> = {};

	addGrade(subject: string, grade: number): void {
		this.grades[subject] = grade;
	}

	updateGrade(subject: string, grade: number): void {
		if (this.grades[subject]) {
			this.grades[subject] = grade;
		}
	}

	calculateAverage(): number {
		const grades = Object.values(this.grades);
		return grades.length ? grades.reduce((a, b) => a + b) / grades.length : 0;
	}
}
