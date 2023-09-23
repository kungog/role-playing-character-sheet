<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$lib/store';
	import createArrayFromObject from '$lib/helpers/getObjectKeys';
	import Box from '$lib/components/Box.svelte';
	import Consumable from './Parts/Consumable.svelte';

	const { consumables }: Character = $page.data.character;

	const items = createArrayFromObject(consumables);

	//FIXME
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

<Box className="consumables" size="medium" handleClick={() => handleConsumablesModal()}>
	<div class="flex space-b align-c">
		{#each items as item}
			<Consumable type={item.key} dice={item.value} />
		{/each}
	</div>
</Box>
