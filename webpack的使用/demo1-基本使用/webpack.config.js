// webpack   =====  node开发的一个执行程序

// 配置文件在webpack执行时，会读取这个文件

// 向外输出webpack的配置项





console.log(__dirname);//当前文件所在系统的路径



module.exports = {
    //编译的入口文件
    // 类型：string|object

    // entry: './src/main.js',

    entry: {
        app: './src/main.js',
        plugin: './src/main2.js'
    },

    // 编译后输出的文件
    output: {
        path: __dirname+'/dist',//输出路径
        filename: '[name][hash:10].js'//输出的文件名字
    }
}
