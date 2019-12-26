<style>
	.house-customizer-controlls__item {
		position: relative;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		margin: 0 1em;

		&.active {
			& img {
				border: 3px solid #eabe47;
				transform: scale(1.05);
			}
		}

		&:hover {
			& img {
				border: 3px solid #eabe47;
			}
		}

		& img {
			width: 50px;
			height: 50px;
			border: 3px solid #ffd86f;
			border-radius: 50%;
			overflow: hidden;
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
			cursor: pointer;
			transform: scale(1);
			transition: transform 0.2s ease-in, border 0.2s ease-in;
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
	const src = `img/${name}_preview.jpg`;
	const alt = `выбор цвета ${name}`;

	let isSubmenuOpen = false;
	let activeColorIndex = 0;

	$: show = isSubmenuOpen && submenuIndex === index;
	// Watch for index changes
	$: if (submenuIndex !== index) {
		isSubmenuOpen = false;
	}

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

	function changeItemHandler(e) {
		const { colorIndex } = e.detail;
		activeColorIndex = colorIndex;
		dispatch('change-item', {
			...e.detail
		});
	}
</script>

<li
	class="house-customizer-controlls__item"
	class:active="{submenuIndex === index}"
	on:click="{clickHandler}"
>
	<img {src} {alt} />
	<span>{title}</span>
	{#if show}
		<ColorMenu
			{colors}
			{name}
			{activeColorIndex}
			on:change-item="{changeItemHandler}"
		/>
	{/if}
</li>
