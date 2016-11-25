'use strict';

const gulp = require('gulp'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config'),
    exec = require('child_process').exec;


const API_PORT = 8081;
const PORT = 8080;
gulp.task('mock', function (callback) {
    // Start a mock
    exec('node ./mock/server.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        callback(err);
    });
});

gulp.task("webpack-dev-server", function (callback) {
    // modify some webpack config options
    var devConfig = Object.create(config);
    devConfig.devtool = "eval";
    // Start a webpack-dev-server
    new WebpackDevServer(webpack(devConfig), {
        publicPath: "/public",
        stats: {
            colors: true
        },
        proxy: {
            '/api/*': {
                target: `http://localhost:${API_PORT}`
            }
        }
    }).listen(PORT, "localhost", function (err) {
        if (err) throw new console.error("webpack-dev-server", err);
        console.log("[webpack-dev-server]", `http://localhost:${PORT}`);
    });
});

gulp.task('default', ['mock', 'webpack-dev-server']);