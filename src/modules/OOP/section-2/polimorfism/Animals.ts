abstract class WildAnimal {
	readonly gender: string;
	readonly name: string;
	abstract makeSound(): void;

	constructor(props: { name: string; gender: string }) {
		this.name = props.name;
		this.gender = props.gender;
	}
}

class WildCat extends WildAnimal {
	makeSound(): void {
		this.name;
		console.log('Meeeow!');
	}
}

class WildDog extends WildAnimal {
	makeSound(): void {
		console.log('Woff! Woff!');
	}
}

export type { WildAnimal };

export { WildCat, WildDog };
