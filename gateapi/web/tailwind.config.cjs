module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					lg: '1.25rem',
				},
				screens: {
					DEFAULT: '100%',
					lg: '896px',
				},
			},
		},
	},
	plugins: [],
}
