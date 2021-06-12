import type { Theme } from 'src/global';
import { Writable, writable } from 'svelte/store';
import { browser } from '$app/env';

function getTheme() {
	if (browser) {
		const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
		const storedTheme = localStorage.theme;
		if (!storedTheme) {
			const modeMatch: any = prefersDarkMode.matches ? 'dark' : 'light';

			// theme.update(modeMatch);

			return modeMatch;
		}
		// theme.update(storedTheme);
		return storedTheme;
	}
}

export const theme: Writable<Theme> = writable(getTheme());

export const count: Writable<number> = writable(0);
