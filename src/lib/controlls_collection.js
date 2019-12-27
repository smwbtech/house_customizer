/**
 *
 * @type {Object[]} itemsObject - list of menu items objects
 * @property {string} itemsObject[].name - name of item (eng only)
 * @property {string} itemsObject[].title - title of menu displayed for user
 * @property {Array} itemsObject[].colors - list of colors available for customization
 */
export const controlls = [
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
	},
	{
		name: 'drains',
		title: 'сливы',
		colors: [
			{
				name: 'default',
				hex: '#756554'
			},
			{
				name: 'green',
				hex: '#b5cf68'
			},
			{
				name: 'blue',
				hex: '#5d929f'
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
