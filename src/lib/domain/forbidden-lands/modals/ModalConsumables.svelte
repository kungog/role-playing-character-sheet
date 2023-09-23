<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';

	const { consumables }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
</script>

<GridTemplate template="1fr">
	<Input
		iType="number"
		iLabel={LABEL.arrows}
		iValue={consumables.arrows}
		iFor="consumables_arrows"
	/>
</GridTemplate>
<GridTemplate template="1fr">
	<Input iType="number" iLabel={LABEL.food} iValue={consumables.food} iFor="consumables_food" />
</GridTemplate>
<GridTemplate template="1fr">
	<Input
		iType="number"
		iLabel={LABEL.torches}
		iValue={consumables.torches}
		iFor="consumables_torches"
	/>
</GridTemplate>
<GridTemplate template="1fr">
	<Input iType="number" iLabel={LABEL.water} iValue={consumables.water} iFor="consumables_water" />
</GridTemplate>
