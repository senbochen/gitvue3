module.exports = {
  publicPath: "./",
  outputDir: "docs",
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://ugclandpage.pae.baidu.com', //测试
        // target: 'http://10.210.12.75:25020', // 卢飞
        changeOrigin: true
      }
    }
  }
}
