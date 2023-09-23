<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Equipment from './Parts/Equipment.svelte';

	const {
		armor: { head, body, shield }
	}: Character = $page.data.character;

	const handleArmor = () => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'armor',
			index: 0,
			value: { head, body, shield }
		};
	};
</script>

<Box handleClick={() => handleArmor()}>
	<Equipment {...head} icon="head" />
	<Equipment {...body} icon="body" />
	<Equipment {...shield} icon="shield" />
</Box>
