<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Weapon from './Parts/Weapon.svelte';

	const { weapons }: Character = $page.data.character;

	const handleWeaponModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'weapons',
			index: index,
			value: weapons[index]
		};
	};
</script>

{#each weapons as weapon, index}
	<Box handleClick={() => handleWeaponModal(index)}>
		<Weapon {...weapon} />
	</Box>
{/each}
