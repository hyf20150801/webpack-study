const path = require('path');

//配合package的cross env去判断是不是开发环境
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    target:'web',
    // __dirname是webpack所在的路径,entry是webpack打包入口,output是webpack打包出口
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            //让webpack支持更多的文件类型(vue,css,img等)打包
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                //支持stylus写css
                test:/\.styl/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|svg)$/,
                use:[
                    {
                        //少于1024的转成base64代码
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name]-aaa.[ext]'
                        }
                    }

                ]

            }
        ]
    }
}

