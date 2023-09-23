<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import { NO_RELATIONS } from '$lib/helpers/constants/languages';
	import { language, modal, showModal } from '$lib/store';

	const { relations }: Character = $page.data.character;

	const handleRelationModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'relations',
			index: index,
			value: relations[index]
		};
	};
</script>

{#if relations.length > 0}
	{#each relations as relation, index}
		<Box handleClick={() => handleRelationModal(index)}>
			<Text>{relation}</Text>
		</Box>
	{/each}
{:else}
	<Text>{NO_RELATIONS[$language]}</Text>
{/if}
