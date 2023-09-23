<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Property from './Parts/Property.svelte';

	const { basic_properties }: Character = $page.data.character;
	const handlePropertiesModal = () => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'basic_properties',
			index: 0,
			value: basic_properties
		};
	};
</script>

<Box className="properties" size="medium" handleClick={() => handlePropertiesModal()}>
	<div class="flex space-b align-c">
		{#each basic_properties as property}
			<Property type={property.id} amount={property.value} failure={property.failure} />
		{/each}
	</div>
</Box>
