<style>
	.house-customizer-colors {
		position: absolute;
		top: 0;
		left: 50%;
		max-height: 50vh;
		min-width: 100%;
		margin: 0;
		padding: 0;
		display: flex;
		flex-flow: column-reverse wrap-reverse;
		justify-content: center;
		align-items: center;
		list-style: none;
		transform: translateY(calc((100% + 20px) * -1)) translateX(-50%);
	}

	@media (768px <= width < 991px) {
		.house-customizer-colors {
			max-height: 400px;
		}
	}

	@media (width < 768px) {
		.house-customizer-colors {
			left: 0;
			top: calc(100% - 160px);
			transform: translateY(0) translateX(0);
			flex-flow: row;
			justify-content: flex-start;
			max-width: 100%;
			overflow-x: scroll;
			padding-left: 1em;
		}
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
