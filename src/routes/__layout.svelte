<!--  src/routes/$layout.svelte -->
<script lang="ts">
	import '../tailwind.css';
	import '../app.css';
	import ThemeToggle from '$lib/objects/themeToggle';
	import Hamburger from '$lib/objects/hamburger';
	import Header from '$lib/objects/header';

	let theme = 'light';
	const toggleTheme = (event: { detail: { light: boolean } }) => {
		const { light } = event.detail;
		theme = light ? 'light' : 'dark';
	};
	const level = 200;
	const darkLevel = 700;
	$: theme;
</script>

<div class={`${theme} site-wrapper`}>
	<div class="theme-wrapper h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
		<Header level={200} darkLevel={700}>
			<div class="flex flex-row justify-end">
				<ThemeToggle on:theme={toggleTheme} {level} {darkLevel} />
				<Hamburger {level} {darkLevel} />
			</div>
		</Header>
		<main>
			<slot />
		</main>
	</div>
</div>
