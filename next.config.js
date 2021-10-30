/*const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['i.pinimg.com']
  }
}

module.exports = withPlugins([[withImages]], nextConfig)
*/
module.exports = {
    images: {
        domains: ['i.pinimg.com'],
        formats: ['image/avif', 'image/webp']

},
    compress: true
}