const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
   addWebpackAlias({
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets/*': path.resolve(__dirname, 'src/assets/*'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
   }),
)
