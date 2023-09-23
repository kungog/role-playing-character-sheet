<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$lib/store';
	import Text from '$lib/components/Text.svelte';
	import RadioButton from '$lib/components/RadioButton.svelte';

	const { skills }: Character = $page.data.character;

	const key = $modal?.objectKey ?? 'animal_handling';
	const skill = skills[key];
</script>

<div>
	<Text selfCenter={false} size="normal">FV</Text>
	<RadioButton iValue={skill} iFor={$modal?.objectKey ?? ''} />
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
