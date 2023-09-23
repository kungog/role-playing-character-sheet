<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { capitalize } from '$lib/helpers/utilites';
	import { language } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import Text from '$lib/components/Text.svelte';
	import GridTemplate from './GridTemplate.svelte';

	const { basic_properties: properties }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
</script>

{#each properties as property}
	<Text>{capitalize(LABEL[property.id])}</Text>
	<GridTemplate template="1fr 1fr">
		<Input iType="number" iLabel={''} iValue={property.value} iFor="property_value" />
		<Input warning iType="number" iLabel={''} iValue={property.failure} iFor="property_failure" />
	</GridTemplate>
{/each}
