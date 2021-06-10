<!--  src/routes/$layout.svelte -->
<script lang="ts">
	import '../tailwind.css';
	import '../app.css';
	import ThemeToggle from '$lib/objects/forms/themeToggle';

	let theme = 'light';
	const toggleTheme = (event: { detail: { light: boolean } }) => {
		const { light } = event.detail;
		theme = light ? 'light' : 'dark';
	};
	$: theme;
</script>

<div class={`${theme} site-wrapper`}>
	<div class="theme-wrapper h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
		<ThemeToggle on:theme={toggleTheme} />
		<main>
			<slot />
		</main>
	</div>
</div>
