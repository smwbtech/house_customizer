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

	$: walls = `img/walls/walls_${customization.walls.color}.png`;
	$: roof = `img/roof/roof_${customization.roof.color}.png`;
	$: windows = `img/windows/windows_${customization.windows.color}.png`;
	$: plumbs = `img/plumbs/plumbs_${customization.plumbs.color}.png`;
	$: drains = `img/drains/drains_${customization.drains.color}.png`;

	function changeItemHandler(e) {
		const { name, color } = e.detail;
		customization[name].color = color;
	}

	onMount(() => loadImagesOnItersection('#house_customizer', controlls));
</script>

<div class="house-customizer-wrapper">

	<!-- Drains customization -->
	{#if customization.drains.color !== 'default'}
		<img class="customization" src="{drains}" alt="выбор цвета сливов" />
	{/if}

	<!-- Plumbs customization -->
	{#if customization.plumbs.color !== 'default'}
		<img class="customization" src="{plumbs}" alt="выбор цвета окон" />
	{/if}

	<!-- Windows customization -->
	{#if customization.windows.color !== 'default'}
		<img class="customization" src="{windows}" alt="выбор цвета окон" />
	{/if}

	<!-- Walls customization -->
	{#if customization.walls.color !== 'default'}
		<img class="customization" src="{walls}" alt="выбор цвета стен" />
	{/if}

	<!-- Roof customization -->
	{#if customization.roof.color !== 'default'}
		<img class="customization" src="{roof}" alt="выбор цвета крыши" />
	{/if}

	<!-- House background image -->
	<img src="img/house.jpg" alt="Изображение стандартного дома" />
	<Controlls on:change-item="{changeItemHandler}" />
</div>
