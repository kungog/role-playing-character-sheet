<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { emptyInventoryObject } from '$lib/helpers/getCharacterObject';
	import { language, modal } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import { typeCheckPost } from '$lib/helpers/utilites';

	const { inventory }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const item = !typeCheckPost($modal) ? inventory[$modal.index] : emptyInventoryObject;
</script>

<GridTemplate template="1fr">
	<Input iType="text" iLabel={LABEL.name} iValue={item.name} iFor="inventory_name" />
</GridTemplate>
<GridTemplate template="1fr 1fr" gap={48}>
	<Input iType="text" iLabel={LABEL.bonus} iValue={item.bonus} iFor="inventory_bonus" />
	<Input iType="number" iLabel={LABEL.weight} iValue={item.weight} iFor="inventory_weight" />
</GridTemplate>
<GridTemplate template="1fr">
	<Input
		iType="text"
		iLabel={LABEL.additionals}
		iValue={item.additionals}
		iFor="inventory_additionals"
	/>
</GridTemplate>
