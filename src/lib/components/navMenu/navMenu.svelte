<script lang="ts">
	import { baseBgClasses, levelBg } from '$lib/cssFunctions';
	import type { BaseBgInterface } from 'src/global';
	export let bg: BaseBgInterface;
	export let open = false;
	export let level = 0;
	const sliderBg = levelBg(bg, level);

	const moveRight = open ? '-right-0' : '';
	$: moveRight;
</script>

<aside
	class="nav-menu fixed h-full {baseBgClasses(
		sliderBg
	)} w-11/12 mr-0 ml-auto transform duration-700 transition-all {open ? '-right-0' : '-right-full'}"
>
	<slot />
</aside>
