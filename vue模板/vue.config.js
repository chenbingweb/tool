// vue.config.js
const px2rem = require('postcss-px2rem');
const postcss = px2rem({
    remUnit: 75   //基准大小 baseSize，需要和rem.js中相同
})
module.exports = {
    baseUrl:'/',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss,
                    require('autoprefixer')
                ]
            }
        }
    }
}
