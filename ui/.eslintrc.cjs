module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'xo',
		'plugin:react/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'indent': ['error', 4], // Acepta 4 espacios de sangrado
		'indent': ['error', 'tab'], // Acepta tabulaciones
		'no-tabs': 'on', // Acepta tabulaciones
		'no-mixed-spaces-and-tabs': 2, // Acepta tabulaciones
	},
};
