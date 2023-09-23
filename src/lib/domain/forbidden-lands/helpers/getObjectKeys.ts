interface SkillItem<T> {
	key: keyof T;
	value: number;
}

const getObject = <T>(key: any, value: any): SkillItem<T> => {
	return {
		key,
		value
	};
};

type CreateArrayFromObject<T> = {
	[key in keyof T]: string | boolean | number | object;
};

const createArrayFromObject = <T>(objects: CreateArrayFromObject<T>): SkillItem<T>[] => {
	return Object.entries(objects).map((object) => {
		return getObject(object[0], object[1]);
	});
};

export default createArrayFromObject;
