import { Animal } from './Animal';

class Cat extends Animal {
	private isNasty: boolean;

	constructor(props: {
		name: string;
		gender: string;
		age: number;
		weight: number;
		color: string;
		isNasty: boolean;
	}) {
		super(props);
		this.isNasty = props.isNasty;
	}

	public meow() {
		console.log(`Cat ${this.name} is meowing!`);
	}
}

export { Cat };
