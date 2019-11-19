const isProduction = process.env.NODE_ENV === 'production'
const babelConfig = isProduction ? {} :{ presets: ['@vue/cli-plugin-babel/preset'] }
module.exports = babelConfig
