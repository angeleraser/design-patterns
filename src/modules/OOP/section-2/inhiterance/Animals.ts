abstract class Animal {
	age: number;
	readonly color: string;
	readonly gender: string;
	readonly name: string;
	weight: number;

	constructor(props: {
		name: string;
		gender: string;
		age: number;
		weight: number;
		color: string;
	}) {
		this.age = props.age;
		this.name = props.name;
		this.gender = props.gender;
		this.weight = props.weight;
		this.color = props.color;
	}

	public eat() {
		console.log(`${this.name} is eating`);
	}

	public sleep(time: string) {
		console.log(`${this.name} is sleeping for ${time}`);
	}
}

interface FourLegged {
	run(destination: string): void;
}

interface OxygenBreather {
	breathe(): void;
}

// Cat inherits from Animal
class Cat extends Animal implements FourLegged, OxygenBreather {
	public breathe() {
		console.log(`${this.name} is breathing`);
	}

	public run(destination: string) {
		console.log(`${this.name} is running to ${destination}`);
	}
}

export { Animal, Cat };
