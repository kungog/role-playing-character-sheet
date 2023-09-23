<script lang="ts">
	import Conditions from '$lib/widgets/Conditions.svelte';
	import Consumables from '$lib/widgets/Consumables.svelte';
	import Money from '$lib/widgets/Money.svelte';
	import Points from '$lib/widgets/Points.svelte';
	import Properties from '$lib/widgets/Properties.svelte';
</script>

<div>
	<Conditions />
	<Properties />
	<Consumables />
	<Points />
	<Money />
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-rows: auto;
		gap: var(--spacing-08);
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas:
			'condition condition condition condition'
			'properties properties consumables consumables'
			'points points money money';
		padding: 0 var(--spacing-10) var(--spacing-24);
		justify-items: stretch;
	}
</style>
