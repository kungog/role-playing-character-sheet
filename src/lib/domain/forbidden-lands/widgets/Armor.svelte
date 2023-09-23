<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import HelmetIcon from '$lib/components/Icons/General/HelmetIcon.svelte';
	import BodyIcon from '$lib/components/Icons/General/BodyIcon.svelte';
	import ShieldIcon from '$lib/components/Icons/General/ShieldIcon.svelte';
	import Text from '$lib/components/Text.svelte';

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

	const iconSize = 22;
</script>

<Box className="armor grid align-c" handleClick={() => handleArmor()}>
	<div class="flex space-b">
		<div class="flex align-c">
			<svelte:component this={HelmetIcon} height={iconSize} width={iconSize} />

			<Text>{head.name ?? '-'}</Text>
		</div>
		<Text size="normal">{head.value ?? 0}</Text>
	</div>

	<div class="flex space-b">
		<div class="flex align-c">
			<svelte:component this={BodyIcon} height={iconSize} width={iconSize} />
			<Text>{body.name ?? '-'}</Text>
		</div>
		<Text size="normal">{body.value ?? 0}</Text>
	</div>

	<div class="flex space-b">
		<div class="flex align-c">
			<svelte:component this={ShieldIcon} height={iconSize} width={iconSize} />
			<Text>{shield.name ?? '-'}</Text>
		</div>
		<Text size="normal">{shield.value ?? 0}</Text>
	</div>
</Box>

<style lang="scss">
	.flex.align-c {
		gap: var(--spacing-10);
	}
</style>
