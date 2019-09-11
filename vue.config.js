const path = require("path");
module.exports = {
    publicPath: './',
    outputDir: 'dist', // 输出文件目录
    assetsDir: "static",
    pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
          path.resolve(__dirname, './src/common/less/index.less'),
          path.resolve(__dirname, './src/common/less/reset.less')
      ]
    }
  },
    chainWebpack: (config) => {
        // 修复HMR
        config.resolve.symlinks(true);
        // 别名配置
        config.resolve.alias
            .set('@', path.resolve(__dirname, './src'))
            .set('@a', path.resolve(__dirname, './src/assets'))
            .set('@c', path.resolve(__dirname, './src/components'))
    },
    baseUrl: '/',
    devServer: {
        // proxy: {
        //     //配置跨域
        //     '/api': {
        //         target: 'https://192.168.1.70:8443',
        //         ws:true,
        //         changOrigin:true,
        //         pathRewrite:{
        //             '^/api':'/'
        //         }
        //     }
        // }
    }
}
