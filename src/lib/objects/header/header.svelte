<script lang="ts">
	import { baseBgClass } from '$lib/cssFunctions';
	export let bgColor: string;
	export let bgLevel: number;
	export let darkLevel: number;
</script>

<header class="p-1 w-full {baseBgClass(bgColor, bgLevel, darkLevel)}">
	<slot />
</header>
