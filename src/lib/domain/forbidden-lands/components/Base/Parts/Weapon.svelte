<script lang="ts">
	import Text from '$lib/components/Text.svelte';
	import { language } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	export let additionals: string, bonus: string, damage: string, range: string, type: string;

	const LABEL = GENERAL_LABELS[$language];
</script>

<div class="upper-part">
	<div class="flex space-b">
		<Text size="normal">{type}</Text>
		<Text>{additionals ?? ''}</Text>
	</div>

	<div class="flex stats">
		<Text>{LABEL['bonus']}: {bonus}</Text>
		<Text>{LABEL['damage']}: {damage}</Text>
		<Text>{LABEL['range']}: {range.toLocaleLowerCase()}</Text>
	</div>
</div>

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}
</style>
