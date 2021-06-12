export const baseBgClass = (bgColor: string, lightLevel: number, darkLevel: number): string => {
	return `bg-${bgColor}-${lightLevel} dark:bg-${bgColor}-${darkLevel}`;
};
