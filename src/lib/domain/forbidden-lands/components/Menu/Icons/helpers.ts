export const MAX_WIDTH = 350;
export const MAX_HEIGHT = 700;
export const DEFAULT_NUMBER = 30;
export const SMALL_NUMBER = 20;

export const checkIfSmallNumber = () => {
	if (window?.innerHeight < MAX_HEIGHT || window?.innerWidth < MAX_WIDTH) {
		return { height: SMALL_NUMBER, width: SMALL_NUMBER };
	}

	return { height: DEFAULT_NUMBER, width: DEFAULT_NUMBER };
};
