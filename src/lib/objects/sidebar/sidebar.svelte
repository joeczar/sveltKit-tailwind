<script lang="ts">
	import { baseBgClass } from '$lib/cssFunctions';
	export let bgColor: string;
	export let bgLevel: number;
	export let darkLevel: number;
	export let open = false;
</script>

<aside
	class="nav-menu fixed h-full {baseBgClass(
		bgColor,
		bgLevel,
		darkLevel
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
