<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { formValues } from '$lib/helpers/form';
	import getSkillObject from '$lib/helpers/getSkills';
	import { capitalize } from '$lib/helpers/utilites';
	import { language, modal, showModal } from '$lib/store';
	import TrashIcon from './Icons/General/TrashIcon.svelte';
	import Text from './Text.svelte';
	const { profile_id }: Character = $page.data.character;

	const handlePostForm = async (selector: any) => {
		const { values, key } = formValues(
			Object.fromEntries(new FormData(document.querySelector(selector)))
		);

		const body = $modal.type === 'PUT' ? values : { [$modal.key]: formValues };

		console.log({ values, key, $modal, body });

		const response = await fetch('/api/weapon', {
			method: $modal.type,
			body: JSON.stringify({ body, modal: $modal, passcode: profile_id }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();
		console.log(data);
	};

	const noLabels = ['weapons', 'newWeapon', 'newTalent'];
	const getLabel = () => {
		if (!$modal?.id) return '';

		if (noLabels.includes($modal?.id)) return '';
		if ($modal?.key === 'skills' && $modal?.objectKey) {
			const skillObject = getSkillObject($modal?.objectKey as keyof Skills, 0);
			return skillObject.languages[$language];
		}

		return '';
	};

	const label = getLabel();
	const save = GENERAL_LABELS[$language]['save'];
	const handleCloseModal = () => ($showModal = false);
</script>

<dialog>
	<button class="overlay" on:click={() => handleCloseModal()} />
	<div class="modal">
		<div class="top">
			<Text size="medium">{capitalize(label)}</Text>
			<button on:click={() => handleCloseModal()}>x</button>
		</div>

		<div class="content">
			<form id="modalForm" method="POST">
				<slot />
			</form>
		</div>
		<div class="bottom">
			<button on:click={() => handleCloseModal()}><TrashIcon /></button>
			<button name="submit" on:click={() => handlePostForm('#modalForm')}>{capitalize(save)}</button
			>
		</div>
	</div>
</dialog>

<style lang="scss">
	%shared-position {
		position: absolute;
	}

	%shared-button {
		border: none;
		padding: 0;
		margin: 0;
		background: none;
		color: var(--color-text);
	}

	.overlay {
		@extend %shared-button;
		@extend %shared-position;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 20%);
		backdrop-filter: blur(2px);
	}

	dialog {
		height: 100%;
		width: 100%;
		position: fixed;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: 0;
	}

	.modal {
		position: relative;
		z-index: 101;
		min-height: 10%;
		width: 90%;
		background: var(--color-box);
		border-radius: var(--radius-04);
		padding: var(--spacing-16);
	}

	.top {
		display: flex;

		button {
			@extend %shared-button;
			font-size: 20px;
			height: 24px;
			width: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: auto;
		}
	}

	.content {
		padding: var(--spacing-18) 0 var(--spacing-48);
	}

	.bottom {
		display: flex;
		align-items: center;
		justify-content: flex-end;

		button {
			@extend %shared-button;
		}

		button:first-child {
			background: var(--color-active);
			border-radius: 4px;
			height: var(--spacing-48);
			width: var(--spacing-54);
			margin-right: var(--spacing-10);
		}

		button:last-child {
			background: var(--color-inactive);
			width: var(--spacing-130);
			height: var(--spacing-48);
			border-radius: 4px;
		}
	}
</style>
