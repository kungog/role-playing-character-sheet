<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { emptyAnimalObject } from '$lib/helpers/getCharacterObject';
	import { language, modal } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import { typeCheckPost } from '$lib/helpers/utilites';

	const { animals }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const animal = !typeCheckPost($modal) ? animals[$modal.index] : emptyAnimalObject;
</script>

<GridTemplate template="1fr">
	<Input iType="text" iLabel={LABEL.name} iValue={animal.name} iFor="animal_name" />
</GridTemplate>
<GridTemplate template="1fr 1fr" gap={48}>
	<Input
		iType="text"
		iLabel={LABEL.flexibility}
		iValue={animal.flexibility}
		iFor="animal_flexibility"
	/>
	<Input iType="number" iLabel={LABEL.strength} iValue={animal.strength} iFor="animal_strength" />
</GridTemplate>
