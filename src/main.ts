import { SectionOneClassModule } from './modules/OOP/section-1';
import { SectionTwoClassModule } from './modules/OOP/section-2';

const ClassModules = [SectionOneClassModule, SectionTwoClassModule];

ClassModules.forEach((module) => {
	module.printName('Start');
	module.run();
	module.printName('End');
});
