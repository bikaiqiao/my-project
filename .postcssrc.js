// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {}
    },
    assetsPublicPath: '/',
    proxytable: {
        '/api': {
            target: 'http://localhost:8080/',
            changOrigin: true,
        }
    }
}