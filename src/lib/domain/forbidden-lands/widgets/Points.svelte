<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Experience from './Parts/Experience.svelte';
	import PowerPoint from './Parts/PowerPoint.svelte';
	export let gridLayout = false;
	const { experience, power_points }: Character = $page.data.character;

	//FIXME
	const handlePointsModal = () => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'power_points',
			index: 0,
			value: power_points
		};
	};

	const layout = gridLayout ? 'grid' : 'flex space-b';
</script>

<Box className="points {layout} align-c" size="small" handleClick={() => handlePointsModal()}>
	<Experience {experience} />
	<PowerPoint {power_points} />
</Box>
