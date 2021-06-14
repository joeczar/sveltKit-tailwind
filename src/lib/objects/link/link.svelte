<script lang="ts">
	import { baseBgClasses } from '$lib/cssFunctions';
	import type { BaseBgInterface } from 'src/global';
	export let classes = '';
	export let src: string;
	export let lightLevel: string;
	export let bg: BaseBgInterface;
</script>

<a class="link {baseBgClasses(bg)} {classes}" {src}>
	<slot />
</a>
