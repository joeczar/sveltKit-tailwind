<script lang="ts">
	import { baseBgClasses } from '$lib/cssFunctions';
	import type { BaseBgInterface } from 'src/global';

	export let bg: BaseBgInterface;
	export let open = false;
</script>

<aside
	class="nav-menu fixed h-full {baseBgClasses(
		bg
	)} w-11/12 mr-0 ml-auto transform transition duration-500 ease-in-out 
"
	class:open
>
	<slot />
</aside>

<style>
	aside {
		right: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		right: 0;
	}
</style>
