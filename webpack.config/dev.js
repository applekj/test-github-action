const { merge } = require('webpack-merge')
const common = require('./common')
const ip = require('ip')
const path = require('path')
const webpack = require('webpack')
const bodyParser = require("body-parser")

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: ip.address(),
        port: 3000,
        open: true,
        hot: true,
        contentBase: path.resolve(__dirname, '../ai-web'),
        historyApiFallback: true,
        before: app => {
            app.use(bodyParser.json());
            app.post('/api/login', (req, res) => {
                setTimeout(() => {
                    res.json({
                        code: 0,
                        data: [],
                        message: '登录成功'
                    })
                }, 2000);
            })
            app.get('/api/calbank', (req, res) => {
                setTimeout(() => {
                    res.json({
                        code: 0,
                        data: [
                            {
                                name: 'Prophet',
                                trainType: 'AI算法',
                                jobType: '水箱用水量、BP曲线',
                                import: 'dateTime',
                                export: 'float,float,float',
                                trainData: 'dateTime,float',
                                result: [],
                                describe: 'Facebook 去年开源了一个时间序列预测的算法，叫做 fbprophet，Facebook 所提供的 prophet 算法不仅可以处理时间序列存在一些异常值的情况，也可以处理部分缺失值的情形，还能够几乎全自动地预测时间序列未来',
                                create: 'admin',
                                createDate: '',
                            }
                        ],
                        message: ''
                    })
                }, 1000);
            })
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': `'dev'`
        })
    ]
})