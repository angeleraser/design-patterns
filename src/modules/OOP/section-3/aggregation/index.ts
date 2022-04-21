import { Course, Student } from '../asociation';

// Can exists isolated
interface Professor {
	name: string;
	students: Array<Student>; // Aggregation, it has one to many relation type
	teach(course: Course): void;
}

interface Department {
	professors: Array<Professor>; // Aggregation, it has one to many relation type
}

export type { Department, Professor };
