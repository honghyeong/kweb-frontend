const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://3.39.245.128:3000", // backend url, port
      changeOrigin: true,
    })
  );
};
