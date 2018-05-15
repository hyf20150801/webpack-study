const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

//配合package的cross env去判断是不是开发环境
const isDev = process.env.NODE_ENV === 'development'

const config = {
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
    },
    plugins:[
        //如果没写''在外面就变成了变量,没有定义过
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:isDev?'"development"':'"production"'
            }
        }),
        new HTMLPlugin()
    ]
}

if(isDev){
    //设置这个模式方便调整代码
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port:8000,
        host:'0.0.0.0',
        overlay:{
            //错误显示在网页上
            errors:true
        },
        //热更新技术,需要插件支持
        hot:true
        ,
        //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
        // historyFallback:{

        // },
        //用npm dev run的时候默认打开浏览器
        // open:true
        
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config

