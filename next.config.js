const withCSS = require('@zeit/next-css')

/* Without CSS Modules, with PostCSS */
module.exports = withCSS({
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
