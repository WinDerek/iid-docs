module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/iid-docs/' : '/',
  
  outputDir: "../dist",
  
  // Disable production source map
  productionSourceMap: false
}
