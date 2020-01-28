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
				name: 't3012',
				hex: '#957d5c'
			},
			{
				name: 't3019',
				hex: '#785849'
			},
			{
				name: 't3027',
				hex: '#5d6c46'
			},
			{
				name: 't3037',
				hex: '#999987'
			},
			{
				name: 't3041',
				hex: '#bbab81'
			},
			{
				name: 't3031',
				hex: '#9da38f'
			},
			{
				name: '2688',
				hex: '#8e9181'
			},
			{
				name: '2684',
				hex: '#789d90'
			},
			{
				name: '2680',
				hex: '#85a075'
			},
			{
				name: '2669',
				hex: '#aa786d'
			},
			{
				name: '2672',
				hex: '#d39f67'
			},
			{
				name: '2665',
				hex: '#655539'
			},
			{
				name: '2661',
				hex: '#dccdae'
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
				name: 'ral5005',
				hex: '#297dad'
			},
			{
				name: 'ral8017',
				hex: '#593f45'
			},
			{
				name: 'ral3005',
				hex: '#904f56'
			},
			{
				name: 'ral7024',
				hex: '#73868b'
			},
			{
				name: 'rr11',
				hex: '#6f9b84'
			},
			{
				name: 'rr32',
				hex: '#676c6d'
			}
		]
	},
	{
		name: 'windows',
		title: 'окна',
		colors: [
			{
				name: 'default',
				title: 'пластик',
				color: '#000',
				hex: '#fff'
			},
			{
				name: 'brown',
				title: 'дерево',
				hex: '#41342c'
			}
		]
	},
	{
		name: 'plumbs',
		title: 'доборы',
		colors: [
			{
				name: 'default',
				title: 'white',
				color: '#000',
				hex: '#fff'
			},
			{
				name: 'brown',
				hex: '#41342c'
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
				name: 'choco',
				hex: '#1c0a0b'
			},
			{
				name: 'brown',
				hex: '#261810'
			},
			{
				name: 'red',
				hex: '#92423e'
			},
			{
				name: 'tile',
				hex: '#9e5f3b'
			},
			{
				name: 'black',
				hex: '#0c0c0c'
			},
			{
				name: 'grey',
				hex: '#656565'
			},
			{
				name: 'dgray',
				hex: '#4f4f4f'
			},
			{
				name: 'metallic',
				hex: '#8e8e8e'
			},
			{
				name: 'white',
				hex: '#fff',
				color: '#000'
			}
		]
	}
];
