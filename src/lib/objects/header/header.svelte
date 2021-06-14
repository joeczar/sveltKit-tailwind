<script lang="ts">
	import { baseBgClasses, levelBg } from '$lib/cssFunctions';
	import type { BaseBgInterface } from 'src/global';

	export let bg: BaseBgInterface;
	export let classes = '';
	export let level = 0;
	const headerBg = levelBg(bg, level);
</script>

<header class="p-1 w-full {baseBgClasses(headerBg)} {classes}">
	<slot />
</header>

<style>
</style>
