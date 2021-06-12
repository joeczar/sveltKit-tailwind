<!--  src/routes/$layout.svelte -->
<script lang="ts">
	import '../tailwind.css';
	import '../app.css';
	import { theme } from '$lib/stores';
	import ThemeToggle from '$lib/objects/themeToggle';
	import Hamburger from '$lib/objects/hamburger';
	import Header from '$lib/objects/header';
	import type { Theme } from 'src/global';

	// let theme = 'light';
	const toggleTheme = (event) => {
		const { light } = event.detail;
		const newTheme: Theme = light === 'light' ? 'light' : 'dark';
	};
	const level = 200;
	const darkLevel = 700;
	$: theme;
</script>

<div class={`${$theme} site-wrapper`}>
	<div class="theme-wrapper h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
		<Header bgColor={'gray'} bgLevel={200} darkLevel={700}>
			<div class="flex flex-row justify-end">
				<ThemeToggle {theme} on:theme={toggleTheme} {level} {darkLevel} />
				<Hamburger {level} {darkLevel} />
			</div>
		</Header>
		<main>
			<slot />
		</main>
	</div>
</div>
