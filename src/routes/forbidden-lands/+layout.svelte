<script lang="ts">
	import '../reset.css';
	import '../globals.css';
	import Header from '$lib/layouts/Header.svelte';
	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/layouts/Footer.svelte';
	import Modals from '$lib/layouts/Modals.svelte';
</script>

<Header />
<main>
	<Container>
		<slot />
	</Container>
</main>
<Footer />
<Modals />

<style>
	main {
		height: var(--body-height-mobile);
	}
</style>
