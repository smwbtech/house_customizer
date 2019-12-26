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

	const dispatch = createEventDispatcher();
	let activeColorIndex = 0;

	function setColorHandler(e) {
		const { color, colorIndex } = e.detail;
		activeColorIndex = colorIndex;
		dispatch('change-item', {
			name,
			color
		});
	}
</script>

<ul class="house-customizer-colors">
	{#each colors as color, index}
		<ColorMenuItem
			{color}
			{index}
			{activeColorIndex}
			on:set-color="{setColorHandler}"
		/>
	{/each}
</ul>
