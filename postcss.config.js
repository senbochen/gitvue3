module.exports = {
  //...其他配置
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
}
