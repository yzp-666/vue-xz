module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    // open: true,
    proxy: {
      '/api': {
        target: 'http://web.juhe.cn:8080/', //目标主机
        ws: true,
        changeOrigin: true,  //  虚拟主机站点
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
