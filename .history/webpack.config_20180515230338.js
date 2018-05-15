const path = require('path');

module.exports = {
    // __dirname是webpack所在的路径,entry是webpack打包入口,output是webpack打包出口
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/.vue$/,
                loader:'vue-loader'
            }
        ]
    }
}