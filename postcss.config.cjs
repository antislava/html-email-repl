const mode = process.env.NODE_ENV;
const dev = mode === "development";
console.log(`postcss: ${dev ? "development" : "production"} build`);

const tailwindcss = require('@tailwindcss/jit');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        // Some plugins, like postcss-nested, need to run before Tailwind

        tailwindcss,

        // But others, like autoprefixer, need to run after

        autoprefixer,

        !dev && cssnano({
            preset: ["default", { discardComments: { removeAll: true } }]
        }),
    ],
};