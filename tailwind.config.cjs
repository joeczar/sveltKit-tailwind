module.exports = {
	purge: ['./src/**/*.html', './src/**/*.js'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				myGray: {
					100: '#f3f2f2',
					200: '#dad8d9',
					300: '#c1bebf',
					400: '#a8a4a6',
					500: '#8f8a8c',
					600: '#757073',
					700: '#5b5759',
					800: '#413e40',
					900: '#323031'
				},
				notWhite: '#F0F3F5',
				blue: {
					100: '#e7e9fe',
					200: '#b6befc',
					300: '#8593f9',
					400: '#5567f7',
					500: '#243cf5',
					600: '#00F259', //base
					700: '#091fc3',
					800: '#071792',
					900: '#050f61'
				},
				green: {
					100: '#e6ffef',
					200: '#b3ffcf',
					300: '#80ffae',
					400: '#4dff8e',
					500: '#1aff6e',
					600: '#00F259', //base
					700: '#00cc4b',
					800: '#009938',
					900: '#006625'
				},
				red: {
					100: '#fdd9ce',
					200: '#fbb39d',
					300: '#f98d6c',
					400: '#f7673b',
					500: '#F6511D', //base
					600: '#dc3a09',
					700: '#ab2d07',
					800: '#7a2005',
					900: '#491303'
				}

				// ...
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
