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
	import ControllsItem from './ControllsItem.svelte';

	let submenuIndex = null;

	/**
	 *
	 * @type {Object[]} itemsObject - list of menu items objects
	 * @property {string} itemsObject[].name - name of item (eng only)
	 * @property {string} itemsObject[].title - title of menu displayed for user
	 * @property {Array} itemsObject[].colors - list of colors available for customization
	 */
	const controlls = [
		{
			name: 'walls',
			title: 'стены',
			colors: [
				{
					name: 'default',
					hex: '#d8b979'
				},
				{
					name: 'green',
					hex: '#b5cf68'
				},
				{
					name: 'red',
					hex: '#c16842'
				},
				{
					name: 'brown',
					hex: '#756554'
				},
				{
					name: 'orange',
					hex: '#f1c76e'
				}
			]
		},
		{
			name: 'roof',
			title: 'крыша',
			colors: [
				{
					name: 'default',
					hex: '#999da8'
				},
				{
					name: 'green',
					hex: '#b5cf68'
				},
				{
					name: 'red',
					hex: '#c16842'
				},
				{
					name: 'blue',
					hex: '#5d929f'
				}
			]
		},
		{
			name: 'windows',
			title: 'окна',
			colors: [
				{
					name: 'default',
					hex: '#fff'
				},
				{
					name: 'orange',
					hex: '#f1c76e'
				},
				{
					name: 'purple',
					hex: '#6f3c3e'
				}
			]
		},
		{
			name: 'plumbs',
			title: 'отвесы',
			colors: [
				{
					name: 'default',
					hex: '#fff'
				},
				{
					name: 'orange',
					hex: '#f1c76e'
				},
				{
					name: 'purple',
					hex: '#6f3c3e'
				}
			]
		}
	];

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
