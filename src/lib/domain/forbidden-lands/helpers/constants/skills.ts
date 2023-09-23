export interface SkillObject {
	type: BasicProperties['id'];
	languages: { sv: string; en: string };
}

type Skills = Record<keyof Character['skills'], SkillObject>;

export const SKILLS: Skills = {
	strength_test: {
		type: 'strength',
		languages: {
			sv: 'Styrkeprov',
			en: 'Strength test'
		}
	},
	stamina: {
		type: 'strength',
		languages: {
			sv: 'Uthållighet',
			en: 'Stamina'
		}
	},
	close_combat: {
		type: 'strength',
		languages: {
			sv: 'Närkamp',
			en: 'Close combat'
		}
	},
	craftmanship: {
		type: 'strength',
		languages: {
			sv: 'Hantverk',
			en: 'Craftmanship'
		}
	},
	sneak: {
		type: 'flexibility',
		languages: {
			sv: 'Smyga',
			en: 'Sneak'
		}
	},
	dexterity: {
		type: 'flexibility',
		languages: {
			sv: 'Fingerfärdighet',
			en: 'Dexterity'
		}
	},
	mobility: {
		type: 'flexibility',
		languages: {
			sv: 'Rörlighet',
			en: 'Mobility'
		}
	},
	marksman: {
		type: 'flexibility',
		languages: {
			sv: 'Skytt',
			en: 'Marksman'
		}
	},
	scout: {
		type: 'intelligence',
		languages: {
			sv: 'Speja',
			en: 'Scout'
		}
	},
	education: {
		type: 'intelligence',
		languages: {
			sv: 'Bildning',
			en: 'Education'
		}
	},
	survival: {
		type: 'intelligence',
		languages: {
			sv: 'Överlevnad',
			en: 'Survival'
		}
	},
	see_through: {
		type: 'intelligence',
		languages: {
			sv: 'Genomskåda',
			en: 'See through'
		}
	},
	manipulate: {
		type: 'charisma',
		languages: {
			sv: 'Manipulera',
			en: 'Manipulate'
		}
	},
	poetry_art: {
		type: 'charisma',
		languages: {
			sv: 'Skaldekonst',
			en: 'Poetry art'
		}
	},
	healing_art: {
		type: 'charisma',
		languages: {
			sv: 'Läkekonst',
			en: 'Healing art'
		}
	},
	animal_handling: {
		type: 'charisma',
		languages: {
			sv: 'Djurhantering',
			en: 'Animal handling'
		}
	}
};
