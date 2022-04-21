import { BestProfessor, Course } from './asociation';
import { ClassModule, ModuleLogger } from '../../../utils/Logger';
import { HighSchoolStudent, SampleProfessor, Student } from './dependency';
import { Professor } from './aggregation';
import { University } from './composition';

class OOPModuleSectionThree implements ModuleLogger {
	execute() {
		// -------- Dependency
		const students: Array<Student> = [{ learn() {} }];
		const highSchoolStudents: Array<HighSchoolStudent> = [
			{
				learnWithBook(book) {
					console.log(book);
				},
			},
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

		// Aggregation
		const professor: Professor = {
			name: 'Mike Lance',
			students: [
				{
					remember: function (knowledge) {
						console.log(knowledge);
					},
				},
			],
			teach: function (course: Course): void {
				this.students.forEach((student) => {
					student.remember(course);
				});
			},
		};

		professor.teach(course);

		// Composition
		const MyUniversity: University = {
			departments: [
				{
					professors: [professor],
				},
			],
		};

		console.log({ university: MyUniversity });
	}
}

export const SectionThreeClassModule = new ClassModule(
	'OOP Module Section 3',
	OOPModuleSectionThree,
);
