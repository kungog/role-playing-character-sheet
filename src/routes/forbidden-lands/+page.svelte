<script lang="ts">
	import { enhance } from '$app/forms';
	export let form: { error?: string } | null;
	import Button from '$lib/components/Button.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Text from '$lib/components/Text.svelte';
	import { onMount } from 'svelte';

	const generatePassword = () => {
		let length = 20,
			charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
			retVal = '';
		for (let i = 0, n = charset.length; i < length; ++i) {
			retVal += charset.charAt(Math.floor(Math.random() * n));
		}
		return retVal;
	};

	const getOldUserPasscode = () => {
		if (!localStorage) return '';
		let passcode = localStorage?.getItem('passcode');
		return passcode && passcode.length > 0 ? passcode : '';
	};

	let passcode = generatePassword();
	let oldUserPasscode = '';
	let isOldUser = false;

	onMount(() => {
		if (localStorage && localStorage?.getItem('passcode')) {
			isOldUser = true;
			oldUserPasscode = getOldUserPasscode();
		}
	});

	const handleClick = () => {
		if (localStorage?.getItem('passcode')) return;
		if (isOldUser && oldUserPasscode.length > 0) {
			localStorage.setItem('passcode', oldUserPasscode);
			return;
		}
		localStorage.setItem('passcode', passcode);
	};

	/* TODO
		Clean up
		Better looking with nicer looking buttons
		Randomize button
		Continue button
		Better input field
		Give option to save in localstorage
	*/
</script>

<div class="grid">
	<span />
	<div class="center column">
		<img src="assets/fblands1.png" alt="forbidden-lands-logo" />
		<Divider />
		<div class="center column">
			<h1>Character builder</h1>

			<Divider />
			<Text>Keep your character online and easier to montior during game time</Text>

			<Divider />
			<Button loading={false} handleClick={() => (isOldUser = true)}>I'm oldie</Button>

			<Divider />

			<form class="center column" method="post" use:enhance>
				{#if !isOldUser}
					<Text bold>Passcode</Text>
					<input bind:value={passcode} name="passcode" />
				{/if}

				{#if isOldUser}
					<Text>Welcome back! Your passcode is:</Text>
					<input bind:value={oldUserPasscode} name="oldUserPasscode" />
				{/if}

				<button type="submit">Continue</button>
			</form>
			<Divider />
		</div>
	</div>
	<span />
</div>

<style lang="scss">
	.grid {
		padding: 0 var(--spacing-16);
		grid-template-columns: 25px 1fr 25px;
		align-items: center;
	}

	img {
		max-width: 300px;
		width: 100%;
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

	button {
		background: transparent;
		border: 0;
	}

	span {
		font-weight: 700;
	}
</style>
