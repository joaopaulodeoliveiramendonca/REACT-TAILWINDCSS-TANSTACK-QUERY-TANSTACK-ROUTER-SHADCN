// webpack.config.js
module.exports = {
  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "process": require.resolve("process/browser"),
      "assert": require.resolve("assert/"),
      "constants": require.resolve("constants-browserify"),
      "buffer": require.resolve("buffer/")
    },
  },
  plugins: [
    // Adicione qualquer plugin extra necessário, como o plugin de Polyfills
  ],
};
