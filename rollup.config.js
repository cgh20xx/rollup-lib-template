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
      name: 'tools', // window 下的全域名稱
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'iife', // 給瀏覽器
    },
  ],
};

export default config;
