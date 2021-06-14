import type { BaseBgInterface } from 'src/global';

export const baseBgClasses = (baseBg: BaseBgInterface): string => {
	return `bg-${baseBg.color}-${baseBg.lightLevel} dark:bg-${baseBg.color}-${baseBg.darkLevel}`;
};
export const levelBg = (bg: BaseBgInterface, level: number): BaseBgInterface => {
	const { color, highlight, lightLevel, darkLevel } = bg;
	const headerBg: BaseBgInterface = {
		color,
		highlight,
		lightLevel: lightLevel + level * 100,
		darkLevel: darkLevel - level * 100
	};
	return headerBg;
};

export default { baseBgClasses, levelBg };
