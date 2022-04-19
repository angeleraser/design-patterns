import { ClassModule, ModuleLogger } from '../../../utils/Logger';
import { BestProfessor, Course } from './asociation';
import { HighSchoolStudent, SampleProfessor, Student } from './dependency';

class OOPModuleSectionThree implements ModuleLogger {
	execute() {
		// -------- Dependency
		const students: Array<Student> = [{ learn() {} }];
		const highSchoolStudents: Array<HighSchoolStudent> = [
			{ learnWithBook(book) {} },
		];

		// Wrong, depends on HighSchoolStudent concret class
		new SampleProfessor(highSchoolStudents);

		// Good, depends on Student abstract class
		new SampleProfessor(students);

		// -------- Asociation
		const prof = new BestProfessor({
			remember(knowledge) {
				console.log(knowledge);
			},
		});

		const course: Course = {
			getKnowledge() {
				return {};
			},
		};

		prof.teach(course);
	}
}

export const SectionThreeClassModule = new ClassModule(
	'OOP Module Section 3',
	OOPModuleSectionThree,
);
