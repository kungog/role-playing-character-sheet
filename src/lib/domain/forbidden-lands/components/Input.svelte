<script lang="ts">
	import { capitalize } from '$lib/helpers/utilites';

	export let iType: 'text' | 'number' | 'textarea',
		iLabel: string,
		iValue: string | number,
		warning: boolean = false,
		iFor: string;
</script>

<div>
	<label for={iFor}>{capitalize(iLabel)}</label>
	<input
		type={iType}
		name={iFor}
		value={iValue}
		style={warning ? 'color: var(--color-active);' : 'color: var(--color-text);'}
	/>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;

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

		label {
			font-size: 14px;
			margin-bottom: var(--spacing-08);
			color: var(--color-text);
		}
	}
</style>
