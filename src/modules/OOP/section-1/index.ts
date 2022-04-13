import { ModuleLogger } from '../../../utils/Logger';
import { Cat } from './classes/Cat';
import { Dog } from './classes/Dog';

export class OOPModuleSectionOne implements ModuleLogger {
	execute() {
		const myCat = new Cat({
			name: 'Charles',
			age: 1,
			color: 'brown',
			weight: 5,
			isNasty: true,
			gender: 'Male',
		});

		const myDog = new Dog({
			name: 'Firulais',
			age: 2,
			color: 'white',
			weight: 8,
			gender: 'Male',
			bestFriend: { name: 'Angel' },
		});

		myCat.meow();
		myDog.bark();
		myDog.run('Florida');
		myDog.callBestFriend();
	}
}
