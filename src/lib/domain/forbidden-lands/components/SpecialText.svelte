<script lang="ts">
  type spanColors = 'accent' | 'black' | 'white' | 'blurred' | 'primary' | 'secondary';
	export let color: spanColors = 'black', italic: boolean = false, uppercased: boolean = false, bold: boolean = false;

  const colors = {
    primary: '--primary-color',
    secondary: '--secondary-color',
    accent: '--accent-color',
    black: '--color-black',
    white: '--color-white',
    blurred: '--color-blured',
  }

  $: colorStyle = colors[color];
  $: italicStyle = italic ? 'italic' : 'normal';
  $: weightStyle = bold ? '900' : '600';
  $: uppercasedStyle = uppercased ? 'uppercased' : 'initial';
</script>

<span style="--color: var({colorStyle}); --italic: {italicStyle}; --weight: {weightStyle}; --uppercased: {uppercasedStyle}">
  <slot />
</span>

<style>
  span {
    font-style: var(--italic);
    font-weight: var(--weight);
    color: var(--color);
    text-transform: var(--uppercased)
  }
</style>