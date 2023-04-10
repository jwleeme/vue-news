const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  chainWebpack: (config) => {
    config.resolve.alias.set('~', path.resolve(__dirname, './'));
  },
  transpileDependencies: true,
  lintOnSave: false
})
