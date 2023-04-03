module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	'overrides': [],
	'parserOptions': {
		'ecmaFeatures': {'jsx': true},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': ['react'],
	'rules': {
		'linebreak-style': 0,
		'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false }],
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'quotes': [2, 'single', { 'avoidEscape': true }],
		'semi': [2, 'always'],
		'indent': [
			'error', 2, {
				'CallExpression': { 'arguments': 1 },
			},
    	],
		'comma-dangle': [
			'error',
			{
				'arrays': 'always-multiline',
				'objects': 'always-multiline',
				'imports': 'always-multiline',
				'exports': 'always-multiline',
				'functions': 'never',
			},
		],
	}
}
