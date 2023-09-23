<script lang="ts">
	import Dice from './Dice.svelte';

	export let property: number | null, skill: number | null, attack: number | string | null;

	const showProperty = typeof property === 'number';
	const showSkill = typeof skill === 'number';
	const showAttack = typeof attack === 'number' || typeof attack === 'string';
</script>

<div>
	{#if showProperty}
		<Dice type="property" amount={property} />
	{/if}
	{#if showSkill}
		<Dice type="skill" amount={skill} />
	{/if}
	{#if showAttack}
		<Dice type="attack" amount={attack} />
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		gap: 10px;
	}
</style>
