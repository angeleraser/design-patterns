interface Student {
	remember(knowledge: unknown): void;
}

interface Course {
	getKnowledge(): unknown;
}

interface AdvancedCourse {
	getKnowledge(tips: string): unknown;
}

abstract class Professor {
	readonly student: Student; // asociation, it's always accesible for professor methods

	constructor(student: Student) {
		this.student = student;
	}

	teach(course: Course) {
		this.student.remember(
			course.getKnowledge() /* dependency, if interface change may break the code */,
		);
	}
}

class BestProfessor extends Professor {}

export type { Student, AdvancedCourse, Course };

export { BestProfessor };
