<script lang="ts">
	import { page } from '$app/stores';
	import { language, modal } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import Textarea from '$lib/components/Textarea.svelte';
	import { typeCheckPost } from '$lib/helpers/utilites';

	const { notes }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const note = !typeCheckPost($modal) ? notes[$modal.index] : '';
</script>

<Textarea iLabel={LABEL.note} iValue={note} iFor="note" />
