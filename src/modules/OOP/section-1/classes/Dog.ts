import { Animal } from './Animal';

class Dog extends Animal {
	private bestFriend: { name: string };

	constructor(props: {
		name: string;
		gender: string;
		age: number;
		weight: number;
		color: string;
		bestFriend: { name: string };
	}) {
		super(props);
		this.bestFriend = props.bestFriend;
	}

	public bark() {
		console.log(`Doc ${this.name} is barking!`);
	}

	public run(destination: unknown) {
		super.run(destination);
		console.log(`${this.name} is running to ${destination}`);
	}

	public callBestFriend() {
		console.log(
			`${this.name} is calling to it's best friend ${this.bestFriend.name}`,
		);
	}
}

export { Dog };
