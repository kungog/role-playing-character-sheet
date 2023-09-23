<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Dices from '$lib/components/Dices.svelte';
	import Text from '$lib/components/Text.svelte';
	import getSkillObject from '$lib/helpers/getSkills';
	import { getSkillDice } from '$lib/helpers/getDices';

	const { weapons, basic_properties, skills }: Character = $page.data.character;
	const skill = 'strength_test';
	const skillObject = getSkillObject(skill, skills[skill]);

	const handleWeaponModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'weapons',
			index: index,
			value: weapons
		};
	};
</script>

<div class="flex column weapons">
	{#each weapons as weapon, index}
		<Box handleClick={() => handleWeaponModal(index)}>
			<div class="upper-part">
				<div class="flex space-b">
					<Text>{weapon.type}</Text>
					<Text>{weapon.bonus ?? ''}</Text>
				</div>

				<div class="flex space-b">
					<Text>{weapon.additionals ?? ''}</Text>
					<Text>{weapon.damage}</Text>
				</div>
			</div>

			<Dices
				{...getSkillDice({
					properties: basic_properties,
					skill: skillObject,
					attack: weapon.damage
				})}
			/>
		</Box>
	{/each}
</div>

<style lang="scss">
	.upper-part {
		margin-bottom: var(--spacing-12);
	}
</style>
