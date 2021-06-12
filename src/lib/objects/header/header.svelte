<script>
	export let level;
	export let darkLevel;
</script>

<header class="p-1 w-full bg-gray-{level} dark:bg-gray-{darkLevel}">
	<slot />
</header>
