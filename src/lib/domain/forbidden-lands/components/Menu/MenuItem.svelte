<script lang="ts">
	import { activeMenu } from '$lib/store';
	import ArmorIcon from './Icons/ArmorIcon.svelte';
	import WeaponIcon from './Icons/WeaponIcon.svelte';
	import ExperienceIcon from './Icons/ExperienceIcon.svelte';
	import HorseIcon from './Icons/HorseIcon.svelte';
	import InventoryIcon from './Icons/InventoryIcon.svelte';
	import RelationIcon from './Icons/RelationIcon.svelte';
	import TalentIcon from './Icons/TalentIcon.svelte';
	import NotesIcon from './Icons/NotesIcon.svelte';

	export let type: MenuItems;

	const component = {
		experience: ExperienceIcon,
		inventory: InventoryIcon,
		animals: HorseIcon,
		relations: RelationIcon,
		talents: TalentIcon,
		armor: ArmorIcon,
		weapons: WeaponIcon,
		notes: NotesIcon
	};

	const handleChange = () => ($activeMenu = type);
	$: isActive = type === $activeMenu ? 'active' : null;
</script>

<button on:click={() => handleChange()} class={isActive}>
	<svelte:component this={component[type]} />
</button>

<style lang="scss">
	button {
		display: flex;
		align-items: center;
		border: none;
		justify-content: center;
		width: 100%;
		background-color: var(--color-blue);
		border-radius: 0 var(--radius-04) var(--radius-04) 0;
		padding: var(--spacing-04) 0;
	}

	button.active {
		background-color: var(--color-blue-active);
	}
</style>
