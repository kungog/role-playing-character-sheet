<script lang="ts">
	import Text from '$lib/components/Text.svelte';
	import CharismaIcon from '$lib/components/Icons/Property/CharismaIcon.svelte';
	import FlexibilityIcon from '$lib/components/Icons/Property/FlexibilityIcon.svelte';
	import IntelligenceIcon from '$lib/components/Icons/Property/IntelligenceIcon.svelte';
	import StrengthIcon from '$lib/components/Icons/Property/StrengthIcon.svelte';

	export let type: BasicProperties['id'],
		amount: BasicProperties['value'],
		failure: BasicProperties['failure'];

	const component = {
		strength: StrengthIcon,
		charisma: CharismaIcon,
		flexibility: FlexibilityIcon,
		intelligence: IntelligenceIcon
	};

	const totalAmount = amount - failure;
	const damage = failure >= 1 ? 'var(--color-active)' : 'var(--color-text)';
	const warning = failure >= 1;
</script>

<div>
	<svelte:component this={component[type]} pulse={!!warning} />
	<Text color={damage}>{totalAmount}</Text>
</div>

<style lang="scss">
	div {
		display: grid;
		justify-items: center;
		gap: 10px;
	}
</style>
