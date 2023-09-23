<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import {
		NO_ANIMALS,
		GENERAL_LABELS,
		BASE_LABELS,
		NO_INVENTORY_ANIMAL
	} from '$lib/helpers/constants/languages';
	import { language, modal, showModal } from '$lib/store';
	import { onMount } from 'svelte';

	const { animals }: Character = $page.data.character;

	const LABEL = GENERAL_LABELS[$language];
	const BASE_LABEL = BASE_LABELS[$language];

	$: activeIndex = null as null | number;
	$: inventory = [] as [] | Animal['inventory'];

	//FIXME
	const handleModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'animals',
			index: index,
			value: animals[index]
		};
	};

	const handleAnimalClick = (index: number) => {
		if (index !== activeIndex) return (activeIndex = index);
		return handleModal(index);
	};

	onMount(() => {
		if (animals.length > 0) {
			activeIndex = 0;
			inventory = animals[activeIndex].inventory;
		}
	});
</script>

{#if animals.length > 0}
	{#each animals as animal, index}
		<Box handleClick={() => handleAnimalClick(index)} active={index === activeIndex}>
			<div class="upper-part">
				<div class="flex space-b">
					<Text size="normal">{animal.name}</Text>
				</div>

				<div class="flex stats">
					<Text>{LABEL['strength']}: {animal.strength}</Text>
					<Text>{LABEL['flexibility']}: {animal.flexibility}</Text>
				</div>
			</div>
		</Box>
	{/each}
{:else}
	<Text>{NO_ANIMALS[$language]}</Text>
{/if}

<div class="test flex space-b">
	<Text size="normal">{BASE_LABEL['inventory']}</Text>
	<Box handleClick={() => alert('fix')}>
		<Text size="large">+</Text>
	</Box>
</div>

{#if inventory.length > 0}
	{#each inventory as item, index}
		<Box handleClick={() => alert('fix --')}>
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
{:else}
	<Text>{NO_INVENTORY_ANIMAL[$language]}</Text>
{/if}

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}

	.test {
		margin-top: var(--spacing-18);
	}
</style>
