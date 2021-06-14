<script lang="ts">
	import { baseBgClasses } from '$lib/cssFunctions';
	import type { BaseBgInterface } from 'src/global';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let onClick = () => {
		dispatch('click');
	};
	export let bg: BaseBgInterface;
	export let classes: string = '';
</script>

<button
	class="{baseBgClasses(bg)} hover:bg-{bg.highlight}-{bg.lightLevel +
		100} dark:hover:bg-{bg.highlight}-{bg.darkLevel + 300} w-10 h-10 mx-2 my-auto {classes}"
	on:click={onClick}
>
	<slot />
</button>
