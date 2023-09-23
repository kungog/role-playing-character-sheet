<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Consumable from './Parts/Consumable.svelte';

	const { consumables }: Character = $page.data.character;

	const handleConsumablesModal = () => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'consumables',
			index: 0,
			value: consumables
		};
	};
</script>

<Box className="arrows" size="small" handleClick={() => handleConsumablesModal()}>
	<Consumable type={'arrows'} dice={consumables.arrows} />
</Box>
