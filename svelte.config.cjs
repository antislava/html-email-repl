const sveltePreprocess = require('svelte-preprocess');
const cloudflare = require('@sveltejs/adapter-cloudflare-workers');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		defaults: {
			sourceMap: true,
			style: 'postcss',
			script: 'typescript'
		},
		postcss: true,
		// typescript: true,
	}),
	kit: {
		adapter: cloudflare(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
