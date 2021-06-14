<script lang="ts">
	import type { BaseBgInterface } from 'src/global';
	import { createEventDispatcher } from 'svelte';
	import Button from '$lib/objects/button';

	export let bg: BaseBgInterface;
	export let classes = '';
	export let open = false;

	const dispatch = createEventDispatcher();

	const onClick = () => {
		open = !open;
		dispatch('open', open);
	};
</script>

<Button {bg} {onClick}>
	<span class="sr-only">Open main menu</span>
	<div class="block w-5 m-auto">
		<span
			aria-hidden="true"
			class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out {open
				? 'rotate-45'
				: ' -translate-y-1.5'}"
		/>
		<span
			aria-hidden="true"
			class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
			class:opacity-0={open}
		/>
		<span
			aria-hidden="true"
			class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out {open
				? ' -rotate-45'
				: ' translate-y-1.5'}"
		/>
	</div>
</Button>
