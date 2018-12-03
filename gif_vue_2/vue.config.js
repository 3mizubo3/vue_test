module.exports = {
  configureWebpack: {
    resolve: {
       alias: {
         'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' webpack 1 用
       }
     }
  }
}
