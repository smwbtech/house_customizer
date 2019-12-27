<style>
	.house-customizer-controlls {
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 0.5em;
		margin: 0;
		background-color: rgba(255, 255, 255, 0.8);
		list-style: none;
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
