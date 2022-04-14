import { ModuleLogger } from '../../../utils/Logger';
import { AirportAirplane, SimulatorAirplane } from './abstraction/Airplane';
import {
	Airplane,
	DomesticatedGryphon,
	Helicopter,
	RandomAirport,
} from './encapsulation/Airport';
import { Cat } from './inhiterance/Animals';
import { WildAnimal, WildCat, WildDog } from './polimorfism/Animals';

export class OOPModuleSectionTwo implements ModuleLogger {
	execute() {
		// Abstraction
		const simulatorAirplane: SimulatorAirplane = {
			speed: 0,
			altitude: 0,
			rollAngle: 0,
			pitchAngle: 0,
			yawAngle: 0,
			fly: function (): void {
				throw new Error('Function not implemented.');
			},
		};

		const airportAirplane: AirportAirplane = {
			seats: 0,
			reserveSeat: function (num: number): void {
				throw new Error('Function not implemented.' + String(num));
			},
		};

		console.log({ simulatorAirplane, airportAirplane });

		// Encapsulation
		new RandomAirport()
			.accept(new Helicopter('AS565 MBE'))
			.startTheFlight(8, 'Canada', 'Venezuela');

		new RandomAirport()
			.accept(new Airplane())
			.startTheFlight(20, 'Russia', 'Germany');

		new RandomAirport().accept(new DomesticatedGryphon('Staryu'));

		// Inhiterance
		const Kitty = new Cat({
			name: 'Kitty',
			gender: 'male',
			age: 2,
			weight: 3,
			color: 'white',
		});

		Kitty.run('the park'); // From FourLegged interface
		Kitty.breathe(); // From OxygenBreather interface
		Kitty.sleep('2 hours'); // From Animal inhiterance

		// Polimorfism
		const wildCat = new WildCat({ name: 'Mik', gender: 'male' });
		const wildDog = new WildDog({ name: 'Fido', gender: 'male' });

		[wildCat, wildDog].forEach((animal: WildAnimal) => {
			animal.makeSound();
		});
	}
}
