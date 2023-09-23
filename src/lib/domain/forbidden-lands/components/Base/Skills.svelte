<script lang="ts">
	import { page } from '$app/stores';
	import createArrayFromObject from '$lib/helpers/getObjectKeys';
	import Skill from './Parts/Skill.svelte';

	const { skills }: Character = $page.data.character;

	const items = createArrayFromObject(skills);
</script>

{#each items as item}
	<Skill skill={item.key} value={item.value} />
{/each}
