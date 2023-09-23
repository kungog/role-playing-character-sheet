<script lang="ts">
	import { page } from '$app/stores';
	import Text from '$lib/components/Text.svelte';
	import Box from '$lib/components/Box.svelte';
	import { language, modal, showModal } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';

	const { inventory }: Character = $page.data.character;

	const LABEL = GENERAL_LABELS[$language];

	const handleInventoryModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'inventory',
			index: index,
			value: inventory[index]
		};
	};
</script>

{#each inventory as item, index}
	<Box handleClick={() => handleInventoryModal(index)}>
		<div class="upper-part">
			<div class="flex space-b">
				<Text size="normal">{item.name}</Text>
				<Text>{item.additionals ?? ''}</Text>
			</div>

			<div class="flex stats">
				<Text>{LABEL['weight']}: {item.weight}</Text>
				<Text>{LABEL['bonus']}: {item.bonus}</Text>
			</div>
		</div>
	</Box>
{/each}

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}
</style>
