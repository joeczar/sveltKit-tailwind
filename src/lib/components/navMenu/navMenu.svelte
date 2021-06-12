<script lang="ts">
	import { baseBgClass } from '$lib/cssFunctions';
	export let bgColor: string;
	export let bgLevel: number;
	export let darkLevel: number;
	export let open = false;
	const moveRight = open ? '-right-0' : '';
	$: moveRight;
</script>

<aside
	class="nav-menu fixed h-full {baseBgClass(
		bgColor,
		bgLevel,
		darkLevel
	)} w-11/12 mr-0 ml-auto transform duration-700 transition-all {open ? '-right-0' : '-right-full'}"
>
	<slot />
</aside>
