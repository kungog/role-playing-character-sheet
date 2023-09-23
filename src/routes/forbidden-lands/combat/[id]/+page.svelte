<script lang="ts">
	import Dashboard from '$lib/components/Combat/Dashboard.svelte';
	import MenuItem from '$lib/components/Menu/MenuItem.svelte';
	import Base from '$lib/components/Combat/Base.svelte';
	import { onMount } from 'svelte';
	import { activeMenu } from '$lib/store';

	const MENU_ITEMS: MenuItems[] = ['talents', 'weapons'];
	onMount(() => {
		$activeMenu = MENU_ITEMS[0];
	});
</script>

<Dashboard />
<div>
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
