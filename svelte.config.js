import preprocess from 'svelte-preprocess';
import cloudflare from '@sveltejs/adapter-cloudflare-workers';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
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
		target: '#svelte',
	}
};

export default config;
