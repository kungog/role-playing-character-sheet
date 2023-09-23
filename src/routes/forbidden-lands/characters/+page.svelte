<script lang="ts">
	import Box from '$lib/components/Box.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import PickCharacter from '$lib/components/PickCharacter.svelte';
	import Text from '$lib/components/Text.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let characters = data?.characters;
	let name = '';

	const handlePostForm = async (selector: any) => {
		let formValues = Object.fromEntries(new FormData(document.querySelector(selector)));

		console.log(formValues);
		const response = await fetch('/api/character/' + formValues.name, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();
		//FIXME
		return (characters = [...characters, data]);
	};
</script>

<div class="main-page center column">
	<h1>Choose your character</h1>
	<Divider />
	<Grid>
		{#each characters as character}
			<a href="/characters/{character._id}">
				<PickCharacter image="/assets/forbidden-lands-placeholder.jpeg" name={character.name} />
			</a>
		{/each}
	</Grid>

	<Divider />
	<Text size="medium">Create new</Text>
	<form id="create" method="POST">
		<input bind:value={name} name="name" />
	</form>
	<button type="submit" on:click={() => handlePostForm('#create')}>Save</button>
</div>

<style lang="scss">
	%shared-button {
		border: none;
		padding: 0;
		margin: 0;
		background: none;
		color: var(--color-text);
	}
	button {
		@extend %shared-button;
		font-size: 20px;
		height: 24px;
		width: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	input {
		background: var(--color-background);
		border: 1px solid transparent;
		padding: var(--spacing-10) var(--spacing-14);
		color: var(--color-text);
		width: 100%;
		border-radius: var(--radius-04);

		&:focus {
			outline: none;
			border: 1px solid var(--color-accent);
		}
	}
</style>
