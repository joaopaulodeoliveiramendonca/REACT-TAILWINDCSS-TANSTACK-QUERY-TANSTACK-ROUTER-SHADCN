// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        fs: false,
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util/'),
        process: require.resolve('process/browser'),
        assert: require.resolve('assert/'),
        constants: require.resolve('constants-browserify'),
        buffer: require.resolve('buffer/'),
      };
      return webpackConfig;
    },
  },
};
