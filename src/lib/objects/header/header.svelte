<script lang="ts">
	import { baseBgClass } from '$lib/cssFunctions';
	import type { FlexDirectionType, HeaderDisplayType } from 'src/global';

	export let bgColor: string;
	export let bgLevel: number;
	export let darkLevel: number;
	export let classes: string;
</script>

<header class="p-1 w-full {baseBgClass(bgColor, bgLevel, darkLevel)} {classes}">
	<slot />
</header>

<style>
</style>
