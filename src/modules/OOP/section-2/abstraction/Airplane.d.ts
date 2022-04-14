// Same class different contexts

interface SimulatorAirplane {
	speed: number;
	altitude: number;
	rollAngle: number;
	pitchAngle: number;
	yawAngle: number;
	fly(): void;
}

interface AirportAirplane {
	readonly seats: number;
	reserveSeat(num: number): void;
}

export { SimulatorAirplane, AirportAirplane };
