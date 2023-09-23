<script lang="ts">
	export let iValue: number | string,
		iFor: string,
		amount: number = 5;

	const amountOfButtons = Array.from({ length: amount }, (_, i) => i + 1);
</script>

<div class="radio">
	{#each amountOfButtons as item}
		<div>
			<input type="radio" name={iFor} value={item} checked={iValue === item} />
			<label for={iFor}>{item}</label>
		</div>
	{/each}
</div>

<style lang="scss">
	.radio {
		display: flex;
		gap: var(--spacing-10);
		margin-top: var(--spacing-10);

		input {
			opacity: 0;
			position: absolute;
			width: 40px;
			height: 40px;
			margin: 0;
		}

		label {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40px;
			height: 40px;
			border-radius: 999px;
			cursor: pointer;
			border: 1px solid var(--color-text);
			color: var(--color-text);
		}

		input[type='radio']:checked + label {
			background-color: var(--color-accent);
			border: 1px solid transparent;
			color: var(--color-black);
		}
	}
</style>
