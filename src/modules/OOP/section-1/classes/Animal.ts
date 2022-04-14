/*
 - UML Diagram -
 > Name

 Animal

 > Fields (State)

 + name
 + gender
 + age
 + weight
 + color
 ...

 > Methods (Behaviour)

 + breathe()
 + eat(food)
 + run(destination)
 + sleep(time)
 */

abstract class Animal {
	name: string;
	gender: string;
	age: number;
	weight: number;
	color: string;

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

	public breathe() {
		console.log(`${this.name} is breathing`);
	}

	public eat() {
		console.log(`${this.name} is eating`);
	}

	public run(destination: unknown) {
		console.log('Running to' + ' ' + destination);
	}

	public sleep(time: StringConstructor) {
		console.log(`Sleeping ${time}`);
	}
}

export { Animal };
