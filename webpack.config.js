const path = require('path');
// webpack config
module.exports = {
    mode:'production',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:'babel-loader'
            },
        ]
    }
}