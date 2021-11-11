const Config = require('./Config');
const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = function (app) {
  if (Config.USE_PROXY) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: Config.SERVER_URL,
        changeOrigin: true,
        ws: true,
        logLevel: 'debug',
      })
    );
  }
};

module.exports = proxy;
