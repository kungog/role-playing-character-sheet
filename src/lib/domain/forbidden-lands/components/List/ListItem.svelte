<li><slot /></li>

<style lang="scss">
  li {
    list-style: none;
    
    &:not(:last-child) {
      margin-bottom: var(--spacing-28);
    }
  }
</style>