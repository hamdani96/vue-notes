const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? 'dist/' : './',
  transpileDependencies: true,
  outputDir: '../dist',
  indexPath: '../index.html'
})
