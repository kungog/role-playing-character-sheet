<script lang="ts">
	import Text from '$lib/components/Text.svelte';
	import ArrowIcon from '$lib/components/Icons/Consumable/ArrowIcon.svelte';
	import FoodIcon from '$lib/components/Icons/Consumable/FoodIcon.svelte';
	import TorchIcon from '$lib/components/Icons/Consumable/TorchIcon.svelte';
	import WaterIcon from '$lib/components/Icons/Consumable/WaterIcon.svelte';

	export let type: keyof Consumables, dice: number;

	const component = {
		arrows: ArrowIcon,
		food: FoodIcon,
		torches: TorchIcon,
		water: WaterIcon
	};
</script>

<div>
	<svelte:component this={component[type]} />
	<Text>T{dice}</Text>
</div>

<style lang="scss">
	div {
		display: grid;
		justify-items: center;
		gap: 10px;
	}
</style>
