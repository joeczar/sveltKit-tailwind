<script lang="ts">
	import type { hLevel } from 'src/global';

	export let level: hLevel;
	export let headline: string;
	export let classes: string;

	const renderHeadline = () => `<h${level} class="${classes}">${headline}</h${level}>`;
</script>

{@html renderHeadline()}
