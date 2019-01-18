// 修改CLI配置

module.exports = {
	publicPath: '/',
	outputDir: 'dist',  // 打包文件目录
	productionSourceMap: false, // 生产环境不需要source map	
	css: {
		modules: true
	},
	devServer: {
		// proxy: '', // 跨域请求代理
		port: '8080',
		open: true
	}
}