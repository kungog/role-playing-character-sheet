<script lang="ts">
	import Dashboard from '$lib/components/Character/Dashboard.svelte';
	import MenuItem from '$lib/components/Menu/MenuItem.svelte';
	import Base from '$lib/components/Character/Base.svelte';
	import { onMount } from 'svelte';
	import { activeMenu } from '$lib/store';
	import type { PageData } from './$types';
	export let data: PageData;
	const MENU_ITEMS: MenuItems[] = [
		'talents',
		'experience',
		'armor',
		'weapons',
		'animals',
		'inventory',
		'relations',
		'notes'
	];

	onMount(() => {
		$activeMenu = MENU_ITEMS[0];
	});

	console.log(data.character);
</script>

<Dashboard />
<div class="flex">
	<aside class="flex column">
		{#each MENU_ITEMS as item}
			<MenuItem type={item} />
		{/each}
	</aside>
	<Base />
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: calc(100vw - var(--spacing-18) - 80%) calc(
				100vw - var(--spacing-18) - 20%
			);
		height: calc(var(--body-height-mobile) - 200px);
		gap: var(--spacing-18);
	}
</style>
