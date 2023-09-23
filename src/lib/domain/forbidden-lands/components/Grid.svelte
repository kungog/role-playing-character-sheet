<div><slot /></div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(3, minmax(300px, 300px));
		grid-column-gap: var(--spacing-20);
		grid-row-gap: var(--spacing-20);
		overflow-x: auto;
	}

	@media (max-width: 1000px) {
		div {
			grid-template-columns: repeat(3, minmax(175px, 175px));
			grid-column-gap: var(--spacing-20);
			grid-row-gap: var(--spacing-20);
			overflow-x: auto;
		}
	}

	@media (max-width: 660px) {
		div {
			grid-template-columns: repeat(2, minmax(125px, 125px));
			grid-column-gap: var(--spacing-20);
			grid-row-gap: var(--spacing-20);
			overflow-x: auto;
		}
	}
</style>
