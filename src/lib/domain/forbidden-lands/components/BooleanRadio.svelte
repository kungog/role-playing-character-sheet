<script lang="ts">
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { capitalize } from '$lib/helpers/utilites';
	import { language } from '$lib/store';
	import Text from './Text.svelte';

	export let iValue: boolean, iFor: string, iLabel: string;
	const LABEL = GENERAL_LABELS[$language];
</script>

<div>
	<Text>{capitalize(iLabel)}</Text>
	<div class="radio">
		<div>
			<input type="radio" name={iFor} value="false" checked={!iValue} />
			<label for={iFor}>{LABEL.no}</label>
		</div>
		<div>
			<input type="radio" name={iFor} value="true" checked={iValue} />
			<label for={iFor}>{LABEL.yes}</label>
		</div>
	</div>
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
			font-size: 12px;
		}

		input[type='radio']:checked + label {
			background-color: var(--color-accent);
			border: 1px solid transparent;
			color: var(--color-black);
		}
	}
</style>
