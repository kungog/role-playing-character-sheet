<script lang="ts">
	import Text from '$lib/components/Text.svelte';
	export let power_points: Character['power_points'];

	const kpString = `${power_points}/10`;
</script>

<div>
	<Text>KP</Text>
	<Text>{kpString}</Text>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 35px 1fr;
		grid-template-rows: 1fr;
	}
</style>
