<!--  src/routes/$layout.svelte -->
<script lang="ts">
	import '../tailwind.css';
	import '../app.css';
	import { theme } from '$lib/stores';
	import ThemeToggle from '$lib/objects/themeToggle';
	import Hamburger from '$lib/objects/hamburger';
	import Header from '$lib/objects/header';
	import type { BaseBgInterface, Theme } from 'src/global';
	import Headline from '$lib/objects/headline/headline.svelte';
	import NavMenu from '$lib/components/navMenu/navMenu.svelte';

	// let theme = 'light';
	const toggleTheme = (event) => {
		const { light } = event.detail;
		const newTheme: Theme = light === 'light' ? 'light' : 'dark';
		theme.set(newTheme);
	};
	const bg: BaseBgInterface = {
		color: 'myBlue',
		highlight: 'myGreen',
		lightLevel: 200,
		darkLevel: 400
	};
	const highlightColor = 'myGreen';
	let open: boolean = false;

	$: theme;
</script>

<div class="{$theme} site-wrapper">
	<div
		class="theme-wrapper h-screen bg-notWhite dark:bg-gray-900 text-gray-900 dark:text-gray-200 "
	>
		<Header {bg} classes="flex flex-row">
			<div class="flex flex-row justify-start justify-items-start">
				<Headline level={1} headline="Styleguide" classes="ml-2 mr-auto my-auto" />
			</div>
			<div class="flex flex-row justify-end ml-auto mr-0">
				<ThemeToggle {theme} on:theme={toggleTheme} {bg} classes="" />
				<Hamburger {bg} classes="my-auto" bind:open />
			</div>
		</Header>
		<NavMenu {bg} {open} level={1} />
		<main>
			<slot />
		</main>
	</div>
</div>
