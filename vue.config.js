module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 8080,
    },
    publicPath: process.env.NODE_ENV === "production" ? "/MK-Portfolio/" : "/"
}
