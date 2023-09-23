<script lang="ts">
	import { capitalize } from '$lib/helpers/utilites';

	export let iLabel: string, iValue: string | number, iFor: string;
</script>

<div>
	<label for={iFor}>{capitalize(iLabel)}</label>
	<textarea name={iFor} value={iValue} />
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;

		textarea {
			background: var(--color-background);
			border: 1px solid transparent;
			padding: var(--spacing-10) var(--spacing-14);
			color: var(--color-text);
			width: 100%;
			border-radius: var(--radius-04);
			resize: vertical;

			&:focus {
				outline: none;
				border: 1px solid var(--color-accent);
			}
		}

		label {
			font-size: 14px;
			margin-bottom: var(--spacing-08);
			color: var(--color-text);
		}
	}
</style>
