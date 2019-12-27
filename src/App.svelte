<style>
	.house-customizer-wrapper {
		max-width: 1200px;
		position: relative;
		& img {
			max-width: 100%;

			&.customization {
				position: absolute;
				left: 0;
				top: 0;
			}
		}
	}
</style>

<script>
	import { onMount } from 'svelte';
	import { controlls } from './lib/controlls_collection.js';
	import { loadImagesOnItersection } from './lib/images_loading.js';
	import Controlls from './Controlls.svelte';

	let customization = {
		walls: {
			color: 'default'
		},
		roof: {
			color: 'default'
		},
		windows: {
			color: 'default'
		},
		plumbs: {
			color: 'default'
		},
		drains: {
			color: 'default'
		}
	};

	function changeItemHandler(e) {
		const { name, color } = e.detail;
		customization[name].color = color;
	}

	onMount(() => loadImagesOnItersection('#house_customizer', controlls));
</script>

<div class="house-customizer-wrapper">

	<!-- Customization layers -->
	{#each Object.keys(customization) as key}
		{#if customization[key].color !== 'default'}
			<img
				class="customization"
				src="{`img/${key}/${key}_${customization[key].color}.png`}"
				alt="кастомизация элемента дома"
			/>
		{/if}
	{/each}

	<!-- House background image -->
	<img src="img/house.jpg" alt="Изображение стандартного дома" />
	<Controlls on:change-item="{changeItemHandler}" />
</div>
