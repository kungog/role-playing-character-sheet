<script lang="ts">
	import Loading from "./Loading.svelte";
	export let handleClick: any, loading: boolean, size: 'large' | 'medium' |'small' = "small";
</script>

<button on:click={handleClick} class={`btn-${size}`}>
  {#if loading} <Loading /> {:else} <slot /> {/if}
</button>

<style lang="scss">
  %button-shared {
    background: var(--accent-color);
    color: var(--color-white);
    border-radius: var(--radius-02);
    border: none;
  }

  .btn-small {
    @extend %button-shared;
    padding: var(--spacing-04) var(--spacing-18);
  }

  .btn-medium {
    @extend %button-shared;
    padding: var(--spacing-08) var(--spacing-20);
  }

  .btn-large {
    @extend %button-shared;
    padding: var(--spacing-08) var(--spacing-30);
    font-size: 24px;
  }

</style>