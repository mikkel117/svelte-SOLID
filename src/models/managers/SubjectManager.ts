export class SubjectManager {
	public subjects: string[] = [];

	addSubject(subject: string): void {
		if (!this.subjects.includes(subject)) {
			this.subjects = [...this.subjects, subject];
		}
	}

	removeSubject(subject: string): void {
		this.subjects = this.subjects.filter((s) => s !== subject);
	}
}
