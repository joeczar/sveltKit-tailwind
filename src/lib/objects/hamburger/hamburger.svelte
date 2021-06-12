<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let bgLevel: number;
	export let darkLevel: number;
	export let classes: string;

	const dispatch = createEventDispatcher();

	export let open = false;
	const toggle = () => {
		open = !open;
		dispatch('open', open);
	};
</script>

<button
	class="m-1 text-gray-500 w-10 h-10 relative focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent 
  hover:bg-gray-{bgLevel + 100} dark:hover:bg-gray-{darkLevel -
		100} bg-gray-{bgLevel} dark:bg-gray-{darkLevel} {classes}"
	on:click={toggle}
>
	<span class="sr-only">Open main menu</span>
	<div class="block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2">
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
</button>
