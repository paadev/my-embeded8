import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import alias from '@rollup/plugin-alias';
import path from 'path';

const projectRootDir = path.resolve(__dirname);
console.log("==================>>>", projectRootDir);
export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'MyEmbeded8',
        exports: 'named',
    },
    plugins: [
        commonjs(),
        alias({

            applicationRoot: __dirname + '/../src/',
            entries: [
            //   { find: 'EmberOne', replacement: projectRootDir + '/../src/components/EmberOne.vue' },
            //   { find: 'EmberTwo', replacement: projectRootDir + '/../src/components/EmberTwo.vue' },
            //   { find: 'EmberThree', replacement: projectRootDir + '/../src/components/EmberThree.vue' },
            //   { find: './components/(.*)', replacement: projectRootDir + '/../src/components/$1.vue' },
            ]
          }),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        buble(), // Transpile to ES5
    ],
}; // /Users/anton/work/vuetest/embedded_app/src/components/EmberOne.vue