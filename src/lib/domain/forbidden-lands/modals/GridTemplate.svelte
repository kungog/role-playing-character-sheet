<script lang="ts">
	export let template: '2fr 1fr' | '1fr' | '1fr 1fr' = '2fr 1fr',
		gap: number = 10;
</script>

<div style="--template: {template}; --gap: var(--spacing-{gap})">
	<slot />
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: var(--template);
		gap: var(--gap);

		&:not(:last-child) {
			margin-bottom: var(--spacing-24);
		}
	}
</style>
