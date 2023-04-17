import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const config = {
  input: {
    tools: 'src/tools.js',
  },
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].esm.js',
      format: 'es', // ES Mdoule
    },
    {
      name: 'tools', // global name under window
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'iife', // for browser
      plugins: [terser()], // compress js
    },
  ],
  plugins: [
    resolve(), // 使 Rollup 能找到外部的 npm 模組
    commonjs(), // 使 Rollup 能將 CommonJS Module 轉換成 ES Module
  ],
};

export default config;
