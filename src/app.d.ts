// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type MenuItems =
		| 'experience'
		| 'talents'
		| 'armor'
		| 'weapons'
		| 'animals'
		| 'inventory'
		| 'relations'
		| 'notes';

	interface Character {
		animals: Animal[];
		carrying_capacity: number;
		experience: number;
		name: string;
		power_points: number;
		profession: string;
		critical_injuries: string;
		profile_id: string;
		_id: string;
		money: {
			gold: number;
			silver: number;
			copper: number;
		};
		race: string;
		armor: Armor;
		basic_properties: BasicProperties[];
		condition: Condition;
		consumables: Consumables;
		weapons: Weapon[];
		talents: Talent[];
		relations: string[];
		notes: string[];
		inventory: Inventory[];
		skills: Skills;
	}

	interface Talent {
		id: string;
		value: 1 | 2 | 3;
	}

	interface Weapon {
		additionals: string;
		bonus: string;
		damage: string;
		range: string;
		type: string;
	}

	interface Inventory {
		additionals: string;
		bonus: string;
		name: string;
		weight: number;
	}

	interface Animal {
		flexibility: number;
		inventory: Inventory[];
		name: string;
		strength: number;
	}

	interface Armor {
		body: {
			name: string;
			value: number;
		};
		head: {
			name: string;
			value: number;
		};
		shield: {
			name: string;
			value: number;
		};
	}

	interface BasicProperties {
		failure: 1 | 2 | 3 | 4 | 5;
		id: 'strength' | 'flexibility' | 'intelligence' | 'charisma';
		value: 1 | 2 | 3 | 4 | 5;
	}

	interface Condition {
		cooled: boolean;
		dry: boolean;
		sleepless: boolean;
		starved: boolean;
	}

	interface Consumables {
		arrows: number;
		food: number;
		torches: number;
		water: number;
	}

	interface Skills {
		animal_handling: number;
		close_combat: number;
		craftmanship: number;
		dexterity: number;
		education: number;
		healing_art: number;
		manipulate: number;
		marksman: number;
		mobility: number;
		scout: number;
		see_through: number;
		poetry_art: number;
		sneak: number;
		stamina: number;
		strength_test: number;
		survival: number;
	}
}

export {};
