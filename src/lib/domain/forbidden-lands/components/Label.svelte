<script lang="ts">
  export let label: string;
</script>

<div>
  <p>{label}</p>
  <slot />
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 16px;
    color: var(--accent-color);
    font-weight: 500;

    &:not(:last-child) {
      margin-bottom: var(--spacing-04);
    }
  }
</style>