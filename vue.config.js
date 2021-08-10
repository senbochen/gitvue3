module.exports = {
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
