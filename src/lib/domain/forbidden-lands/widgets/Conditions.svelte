<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import createArrayFromObject from '$lib/helpers/getObjectKeys';
	import Condition from './Parts/Condition.svelte';
	export let gridLayout = false;

	const { condition, critical_injuries: critical }: Character = $page.data.character;
	const items = createArrayFromObject(condition);

	//FIXME
	const handleConditionModal = () => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'condition',
			value: condition,
			index: 0
		};
	};

	const layout = gridLayout ? 'grid' : 'flex space-b';
</script>

<Box size="small" handleClick={() => handleConditionModal()} className="condition">
	<div class="{layout} align-c">
		<div class="flex align-c">
			{critical ?? '-'}
		</div>
		<div class="flex align-c">
			{#each items as item}
				<Condition type={item.key} isActive={!!item.value} />
			{/each}
		</div>
	</div>
</Box>

<style lang="scss">
	.grid {
		gap: var(--spacing-10);
	}
</style>
