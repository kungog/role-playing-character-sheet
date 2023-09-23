<script lang="ts">
	import { modal, showModal } from '$lib/store';
	import Modal from '$lib/components/Modal.svelte';
	import ModalArmor from '$lib/modals/ModalArmor.svelte';
	import ModalWeapon from '$lib/modals/ModalWeapon.svelte';
	import ModalSkill from '$lib/modals/ModalSkill.svelte';
	import ModalTalent from '$lib/modals/ModalTalent.svelte';
	import ModalInventory from '$lib/modals/ModalInventory.svelte';
	import ModalRelation from '$lib/modals/ModalRelation.svelte';
	import ModalNote from '$lib/modals/ModalNote.svelte';
	import ModalAnimal from '$lib/modals/ModalAnimal.svelte';
	import ModalMoney from '$lib/modals/ModalMoney.svelte';
	import ModalProperties from '$lib/modals/ModalProperties.svelte';
	import ModalCondition from '$lib/modals/ModalCondition.svelte';
	import ModalPoints from '$lib/modals/ModalPoints.svelte';
	import ModalConsumables from '$lib/modals/ModalConsumables.svelte';

	$: id = $modal?.key;
	$: show = $showModal;

	const component = {
		armor: ModalArmor,
		weapons: ModalWeapon,
		skills: ModalSkill,
		inventory: ModalInventory,
		talents: ModalTalent,
		relations: ModalRelation,
		notes: ModalNote,
		animals: ModalAnimal,
		condition: ModalCondition,
		basic_properties: ModalProperties,
		consumables: ModalConsumables,
		power_points: ModalPoints,
		money: ModalMoney
	};
</script>

{#if $modal && id && show}
	<Modal>
		<svelte:component this={component[id]} />
	</Modal>
{/if}
