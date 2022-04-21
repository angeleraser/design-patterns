import { SectionOneClassModule } from './modules/OOP/section-1';
import { SectionTwoClassModule } from './modules/OOP/section-2';
import { SectionThreeClassModule } from './modules/OOP/section-3';

const ClassModules = [
	SectionOneClassModule,
	SectionTwoClassModule,
	SectionThreeClassModule,
];

ClassModules.forEach((module) => {
	module.printName('Start');
	module.run();
	module.printName('End');
});
