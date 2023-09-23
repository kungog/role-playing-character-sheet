<script lang="ts">
	import CooledIcon from '$lib/components/Icons/Condition/CooledIcon.svelte';
	import DryIcon from '$lib/components/Icons/Condition/DryIcon.svelte';
	import SleeplessIcon from '$lib/components/Icons/Condition/SleeplessIcon.svelte';
	import StarvedIcon from '$lib/components/Icons/Condition/StarvedIcon.svelte';

	export let type: keyof Condition, isActive: boolean;

	const component = {
		cooled: CooledIcon,
		dry: DryIcon,
		sleepless: SleeplessIcon,
		starved: StarvedIcon
	};

	const color = isActive ? 'var(--color-active)' : 'var(--color-inactive)';
</script>

<div>
	<svelte:component this={component[type]} {color} />
</div>

<style>
	div:not(:last-child) {
		margin-right: var(--spacing-08);
	}
</style>
