export const emptyWeaponObject: Weapon = {
	type: '',
	bonus: '',
	damage: '',
	range: '',
	additionals: ''
};

export const emptyAnimalObject: Animal = {
	flexibility: 0,
	strength: 0,
	inventory: [],
	name: ''
};

export const emptyInventoryObject: Inventory = {
	additionals: '',
	bonus: '',
	name: '',
	weight: 0
};

export const emptyTalentObject: Talent = {
	id: 'empty',
	value: 1
};

export const emptyCharacter = {
	profile_id: '',
	name: '',
	race: '',
	profession: '',
	basic_properties: [
		{
			value: 0,
			failure: 0,
			id: 'strength'
		},
		{
			value: 0,
			failure: 0,
			id: 'flexibility'
		},
		{
			value: 0,
			failure: 0,
			id: 'intelligence'
		},
		{
			value: 0,
			failure: 0,
			id: 'charisma'
		}
	],
	condition: {
		sleepless: false,
		dry: false,
		starved: false,
		cooled: false
	},
	critical_injuries: null,
	description: {
		face: null,
		body: null,
		cloths: null,
		age: 0,
		dark_secret: '',
		pride: '',
		reputation: 0
	},
	talents: [],
	skills: {
		strength_test: 0,
		stamina: 0,
		close_combat: 0,
		craftmanship: 0,
		sneak: 0,
		dexterity: 0,
		mobility: 0,
		marksman: 0,
		scout: 0,
		education: 0,
		survival: 0,
		see_through: 0,
		manipulate: 0,
		healing_art: 0,
		animal_handling: 0,
		poetry_art: 0
	},
	weapons: [],
	armor: {
		head: {
			name: null,
			value: null
		},
		body: {
			name: null,
			value: null
		},
		shield: {
			name: null,
			value: null
		}
	},
	relations: [],
	consumables: {
		food: 0,
		water: 0,
		arrows: 0,
		torches: 0
	},
	animals: [],
	inventory: [],
	carrying_capacity: 0,
	money: {
		gold: 0,
		silver: 0,
		copper: 0
	},
	experience: 0,
	power_points: 0,
	notes: []
};
