<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { emptyWeaponObject } from '$lib/helpers/getCharacterObject';
	import { language, modal } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import { typeCheckPost } from '$lib/helpers/utilites';

	const { weapons }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const weapon = !typeCheckPost($modal) ? weapons[$modal.index] : emptyWeaponObject;
</script>

<GridTemplate template="1fr">
	<Input iType="text" iLabel={LABEL.weapons} iValue={weapon.type} iFor="weapon_type" />
</GridTemplate>
<GridTemplate template="1fr 1fr" gap={48}>
	<Input iType="text" iLabel={LABEL.bonus} iValue={weapon.bonus} iFor="weapon_bonus" />
	<Input iType="number" iLabel={LABEL.damage} iValue={weapon.damage} iFor="weapon_damage" />
</GridTemplate>
<GridTemplate template="1fr">
	<Input iType="text" iLabel={LABEL.range} iValue={weapon.range} iFor="weapon_range" />
</GridTemplate>
<GridTemplate template="1fr">
	<Input
		iType="text"
		iLabel={LABEL.additionals}
		iValue={weapon.additionals}
		iFor="weapon_additionals"
	/>
</GridTemplate>
