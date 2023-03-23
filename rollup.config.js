import terser from '@rollup/plugin-terser';

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
};

export default config;
