<script lang="ts">
	export let color: string = 'var(--color-accent)',
		pulse: boolean = false,
		width: number = 20,
		height: number = 20;
</script>

<svg
	class={pulse ? 'pulse circle' : ''}
	{width}
	{height}
	viewBox="0 0 20 20"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M1.16426 1.16313L9.4586 8.18551H4.63719L9.03328 11.5755H3.74981L12.5645 18.3729L9.37946 13.8396L11.9766 13.8452L18.976 19.2427L12.2588 9.6823H15.5623L9.69071 1.16309H1.16426V1.16313Z"
		fill={color}
	/>
</svg>
