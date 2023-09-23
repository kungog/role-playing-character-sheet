<div />

<style>
	div {
    padding: 24px 0;
    width: 100%;
	}

	@media (max-width: 1000px) {
		div {
			grid-template-columns: repeat(2, minmax(300px, 300px));
			grid-column-gap: var(--spacing-20);
			grid-row-gap: var(--spacing-20);
			overflow-x: auto;
		}
	}

	@media (max-width: 660px) {
		div {
			grid-template-columns: repeat(1, minmax(300px, 300px));
			grid-column-gap: var(--spacing-20);
			grid-row-gap: var(--spacing-20);
			overflow-x: auto;
		}
	}
</style>