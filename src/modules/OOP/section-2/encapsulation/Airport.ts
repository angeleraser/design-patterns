interface Airport {
	accept(vehicle: FlyingTransport): this;
	startTheFlight(passengers: number, destination: string, origin: string): void;
}

interface FlyingTransport {
	fly(origin: string, destination: string, passengers: number): void;
}

class RandomAirport implements Airport {
	private vehicle: FlyingTransport | null;

	constructor() {
		this.vehicle = null;
	}

	startTheFlight(passengers: number, destination: string, origin: string) {
		if (!this.vehicle) throw new Error('No vehicle available');
		this.vehicle.fly(origin, destination, passengers);
	}

	accept(vehicle: FlyingTransport) {
		this.vehicle = vehicle;
		return this;
	}
}

class Helicopter implements FlyingTransport {
	constructor(private readonly model: string) {}

	fly(origin: string, destination: string, passengers: number): void {
		console.log(this.model);

		console.log(
			`Flying to ${destination} from ${origin} with ${passengers} passengers`,
		);
	}
}

class Airplane implements FlyingTransport {
	constructor() {}

	fly(origin: string, destination: string, passengers: number) {
		if (passengers > 20)
			throw new Error(`Insuficient seats available for ${passengers}`);

		console.log(
			`Flying to ${destination} from ${origin} with ${passengers} passengers`,
		);
	}
}

class DomesticatedGryphon implements FlyingTransport {
	constructor(private readonly name: string) {}

	fly(origin: string, destination: string, passengers: number) {
		if (passengers > 2) {
			throw new Error(`Gryphon ${this.name} says: Raaaaaaaawrrr!`);
		}

		console.log(`Let's start fly from ${origin} to ${destination}`);
	}
}

export { RandomAirport, Helicopter, Airplane, DomesticatedGryphon };

export type { Airport, FlyingTransport };
