import { SKILLS } from './constants/skills';

const getSkillObject = (skill: keyof Character['skills'], value: number) => ({
	...SKILLS[skill],
	value
});

export default getSkillObject;
