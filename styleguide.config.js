const path = require('path');

module.exports = {
	title: 'React Checkbox',
	styleguideDir: 'docs/',
	webpackConfig: require('./webpack.config.js'),
	components: ['src/*.jsx', 'examples/Example.jsx'],
	ribbon: {
		url: 'https://github.com/trendmicro-frontend/react-checkbox',
		text: 'Fork me on GitHub'
	},
	require: [
		'babel-polyfill',
    	path.join(__dirname, 'node_modules/trendmicro-ui/dist/css/trendmicro-ui.css'),
    	path.join(__dirname, 'node_modules/@trendmicro/react-buttons/dist/react-buttons.css'),
    	path.join(__dirname, 'dist/react-checkbox.css'),
	],
	theme: {
		maxWidth: 1250
	}
};