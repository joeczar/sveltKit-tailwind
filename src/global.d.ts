/// <reference types="@sveltejs/kit" />

export type Theme = 'light' | 'dark';
export type hLevel = 1 | 2 | 3 | 4 | 5 | 6;
export interface BaseBgInterface {
	color: string;
	highlight: string;
	lightLevel: number;
	darkLevel: number;
}
