<script lang="ts">
	import Text from '$lib/components/Text.svelte';
	export let experience: Character['power_points'];

	const kpString = `${experience}/25`;
</script>

<div>
	<Text>EP</Text>
	<Text>{kpString}</Text>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 35px 1fr;
		grid-template-rows: 1fr;
	}
</style>
