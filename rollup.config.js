import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const config = {
  input: {
    tools: 'src/index.js',
  },
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].esm.js',
      format: 'es', // ES Mdoule
    },
    {
      dir: 'dist',
      entryFileNames: '[name].cjs.js',
      format: 'cjs', // CommonJs
    },
    {
      name: 'tools', // global name under window
      dir: 'dist',
      entryFileNames: '[name].umd.js',
      format: 'umd', // 同時支援 amd、cjs、iife
    },
    {
      name: 'tools', // global name under window
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'iife', // for browser
      plugins: [terser()], // compress js
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // 使 Rollup 能解析 node_modules 模組
    commonjs(), // 使 Rollup 能將 CommonJS Module 轉換成 ES Module
  ],
  // external: ['lodash-es'], // 外部模組不會被打包，需額外設定 output.globals
};

export default config;
