<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import { NO_NOTES } from '$lib/helpers/constants/languages';
	import { language, modal, showModal } from '$lib/store';

	const { notes }: Character = $page.data.character;

	const handleNoteModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'notes',
			index: index,
			value: notes[index]
		};
	};
</script>

{#if notes.length > 0}
	{#each notes as note, index}
		<Box handleClick={() => handleNoteModal(index)}>
			<Text>{note}</Text>
		</Box>
	{/each}
{:else}
	<Text>{NO_NOTES[$language]}</Text>
{/if}
