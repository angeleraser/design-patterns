interface Student {
	learn(): void;
}

interface HighSchoolStudent {
	learnWithBook(book: unknown): void;
}

abstract class Professor {
	readonly students: Array<HighSchoolStudent>;

	constructor(students: Array<HighSchoolStudent>) {
		this.students = students;
	}

	teach(course: unknown) {
		this.students.forEach((student) => {
			student.learnWithBook(course);
		});
	}
}

class SampleProfessor extends Professor {}

export type { Student, HighSchoolStudent };

export { SampleProfessor };
