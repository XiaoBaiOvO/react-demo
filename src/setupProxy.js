const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "https://ebai.cloud",
            // target: "https://192.168.1.2:9000",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware("/api/ws", {
            target: "https://ebai.cloud",
            // target: "https://192.168.1.2:9000",
            ws: true,
            changeOrigin: true,
        })
    );
};
