<script lang="ts">
	import Conditions from '$lib/widgets/Conditions.svelte';
	import Arrows from '$lib/widgets/Arrows.svelte';
	import Points from '$lib/widgets/Points.svelte';
	import Armor from '$lib/widgets/Armor.svelte';
</script>

<div>
	<Conditions gridLayout />
	<Armor />
	<Arrows />
	<Points gridLayout />
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-rows: auto;
		gap: var(--spacing-08);
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas:
			'condition condition armor armor'
			'arrows points armor armor';
		padding: 0 var(--spacing-10) var(--spacing-24);
		justify-items: stretch;
	}
</style>
