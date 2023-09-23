<script lang="ts">
	import { page } from '$app/stores';
	import { BASE_LABELS } from '$lib/helpers/constants/languages';
	import Text from '../Text.svelte';
	import { activeMenu, language, modal, showModal, type ModalKeys } from '$lib/store';
	import Talents from '../Base/Talents.svelte';
	import Box from '../Box.svelte';
	import Weapons from '../Base/Weapons.svelte';

	$: menuItem = $activeMenu as 'weapons' | 'talents';
	const hide = ['weapons', 'talents'];
	const component = {
		weapons: Weapons,
		talents: Talents
	};

	const handleModal = () => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'POST',
			key: menuItem as ModalKeys,
			value: null,
			index: 0
		};
	};
</script>

<div>
	<div class="flex space-b">
		<Text size="medium">{BASE_LABELS[$language][menuItem]}</Text>
		<Box handleClick={() => handleModal()} hidden={hide.includes(menuItem)}>
			<Text size="large">+</Text>
		</Box>
	</div>
	<div class="main-part">
		<svelte:component this={component[menuItem]} />
	</div>
</div>

<style lang="scss">
	.space-b {
		padding-bottom: var(--spacing-10);
	}

	.main-part {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-08);
		height: calc(var(--body-height-mobile) - 200px - var(--spacing-35));
		overflow: auto;
		padding-bottom: var(--spacing-20);
	}
</style>
