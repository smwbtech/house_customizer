<style>
	.house-customizer-controlls {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 0.5em;
		margin: 0;
		background-color: #fff;
		list-style: none;
	}

	@media (width < 991px) {
		.house-customizer-controlls {
			max-width: 100%;
			padding: 0.5em 0;
		}
	}

	@media (width < 768px) {
		.house-customizer-controlls {
			justify-content: flex-start;
			overflow-x: scroll;
		}
	}
</style>

<script>
	import { controlls } from './lib/controlls_collection.js';
	import ControllsItem from './ControllsItem.svelte';

	let submenuIndex = null;

	function changeSubmenuHandler(e) {
		const { index } = e.detail;
		submenuIndex = index;
	}
</script>

<ul class="house-customizer-controlls">
	{#each controlls as controllsItem, index}
		<ControllsItem
			{...controllsItem}
			{index}
			{submenuIndex}
			on:change-submenu="{changeSubmenuHandler}"
			on:change-item
		/>
	{/each}
</ul>
