module.exports = {
    publicPath: '/',
    devServer: {
        host: '10.10.4.206',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/bing': {
                target: 'https://cn.bing.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/bing': ''
                }
            },
            '/music': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/music': ''
                }
            }
        }
    }
};
