<style>
	.house-customizer-controlls__item {
		position: relative;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		margin: 0 1em;
		& img {
			width: 50px;
			height: 50px;
			border: 3px solid #ffd86f;
			border-radius: 50%;
			overflow: hidden;
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
			cursor: pointer;
		}
	}
</style>

<script>
	import { createEventDispatcher } from 'svelte';
	import ColorMenu from './ColorMenu.svelte';

	export let title;
	export let name;
	export let colors;
	export let index;
	export let submenuIndex;

	const dispatch = createEventDispatcher();

	let isSubmenuOpen = false;
	const src = `img/${name}_preview.jpg`;
	const alt = `выбор цвета ${name}`;

	$: show = isSubmenuOpen && submenuIndex === index;

	/**
        Toggle submenu status and dispatch
        'change-submenu' event with index of
        current component
        @param {object} e - click event object
        @returns {undefined}
    */
	function clickHandler(e) {
		isSubmenuOpen = !isSubmenuOpen;
		dispatch('change-submenu', {
			index: isSubmenuOpen ? index : null
		});
	}
</script>

<li class="house-customizer-controlls__item" on:click="{clickHandler}">
	<img {src} {alt} />
	<span>{title}</span>
	{#if show}
		<ColorMenu {colors} {name} on:change-item />
	{/if}
</li>
