import { writable } from 'svelte/store';

const MAIN_LANGUAGES: ['sv', 'en'] = ['sv', 'en'];
const ACTIVE_LANGUAGE = MAIN_LANGUAGES[0];

export const activeMenu = writable<MenuItems>();
export const language = writable(ACTIVE_LANGUAGE);
export const showModal = writable(false);

export type ModalKeys =
	| 'armor'
	| 'weapons'
	| 'skills'
	| 'inventory'
	| 'talents'
	| 'relations'
	| 'notes'
	| 'animals'
	| 'condition'
	| 'basic_properties'
	| 'consumables'
	| 'power_points'
	| 'money';

interface Modal {
	id: Character['_id']; // _id,
	key: ModalKeys;
	type: 'NULL' | 'POST' | 'PUT' | 'DELETE';
	index: number;
	value: any; // formValues
	objectKey?: keyof Skills;
	talentId?: string;
}

export const modal = writable<Modal>();
