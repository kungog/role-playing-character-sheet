import type { SkillObject } from './constants/skills';

interface GetDice {
	properties: Character['basic_properties'];
	skill: SkillObject & { value: number };
	attack?: string | number;
}

export const getSkillDice = ({ properties, skill, attack }: GetDice) => {
	const property = properties.find((property: BasicProperties) => property.id === skill.type);

	if (!property) {
		//FIXME error handling
		console.error('No property found');
		return { property: 0, skill: 0, attack: null };
	}

	return {
		property: property.value - property.failure,
		skill: skill.value,
		attack: attack ?? null
	};
};
