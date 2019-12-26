<style>
	.house-customizer-colors__item {
		border-radius: 50%;
		border: 3px solid #fff;
		width: 50px;
		height: 50px;
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
		margin: 0.5em 0;
		cursor: pointer;
		transition: border 0.3s ease-in, box-shadow 0.3s ease-out;

		&.active {
			border: 3px solid #ffd86f;
		}

		&:hover {
			border: 3px solid #ffd86f;
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
		}
	}
</style>

<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	export let color;
	export let index;
	export let activeColorIndex;
	export let colorsLength;

	const dispatch = createEventDispatcher();

	let init = false;

	$: style = `background-color: ${color.hex};`;
	function clickHandler(e) {
		dispatch('set-color', {
			color: color.name,
			colorIndex: index
		});
	}

	onMount(() => setTimeout(() => (init = true), 20 * (colorsLength - index)));
</script>

{#if init}
	<li
		transition:fly="{{ delay: (colorsLength - index) * 10, duration: 200, y: 20 }}"
		class="house-customizer-colors__item"
		class:active="{index === activeColorIndex}"
		on:click="{clickHandler}"
		{style}
	></li>
{/if}
