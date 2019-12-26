<style>
	.house-customizer-colors {
		position: absolute;
		top: 0;
		left: 50%;
		width: 50px;
		margin: 0;
		padding: 0;
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		transform: translateY(calc((100% + 20px) * -1)) translateX(-50%);
	}
</style>

<script>
	import { createEventDispatcher } from 'svelte';
	import ColorMenuItem from './ColorsMenuItem.svelte';

	export let colors;
	export let name;
	export let activeColorIndex;

	const dispatch = createEventDispatcher();

	function setColorHandler(e) {
		const { color, colorIndex } = e.detail;
		dispatch('change-item', {
			name,
			color,
			colorIndex
		});
	}
</script>

<ul class="house-customizer-colors">
	{#each colors as color, index}
		<ColorMenuItem
			{color}
			{index}
			{activeColorIndex}
			colorsLength="{colors.length}"
			on:set-color="{setColorHandler}"
		/>
	{/each}
</ul>
