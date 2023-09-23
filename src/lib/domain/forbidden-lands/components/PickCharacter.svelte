<script lang="ts">
	export let name: string, image: string
</script>

<div>
  <img src={image} alt='image of {name}' />
  <p>{name}</p>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: var(--spacing-12);
    }

    p {
      text-transform: uppercase;
      letter-spacing: 1.2px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
</style>