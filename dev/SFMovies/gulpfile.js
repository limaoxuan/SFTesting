// generated on 2016-08-01 using generator-webapp 2.1.0
// i have not time to build.... it's a beta version;


const gulp = require('gulp');
const minifycss = require('gulp-minify-css');//css压缩
const notify = require('gulp-notify');//提示信息
const uglify = require('gulp-uglify'); //js压缩
const imagemin = require('gulp-imagemin');//图片压缩
const htmlmin = require('gulp-htmlmin'); //html压缩
const fontmin = require('gulp-fontmin');
const del = require('del');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config');
const rootPath = "publish";

//// 重新清空编译目录
//gulp.task('clean',del('dist'));
gulp.task('clean', del.bind(null, [rootPath]));

//// css压缩
gulp.task('styles', () => {
  return gulp.src('static/css/*.css').pipe(minifycss())
    .pipe(gulp.dest(rootPath+'/static/css'))
    .pipe(notify({ message: 'css task ok' }));
});

// js 压缩
gulp.task('scripts', () => {
  return gulp.src('static/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(rootPath+'/static/js'))
    .pipe(notify({ message: 'js task ok' }));
});

// 压缩html
gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(rootPath))
    .pipe(notify({ message: 'html task ok' }));

});

//图片压缩
gulp.task('images', () => {
  return gulp.src('static/imgs/*')
    .pipe(imagemin())
    .pipe(gulp.dest(rootPath +'/static/imgs'))
    .pipe(notify({ message: 'images task ok' }));
});

/// webpack build
gulp.task("myWebpack",()=>{
  return gulp.src('src/main.js')
    .pipe(webpack(webpackConfig)).pipe(gulp.dest(rootPath+'/static/js')).pipe(notify({ message: 'webpack task ok' }));

});

//font
// gulp.task('fonts', function () {
//   return gulp.src('static/fonts/*')
//     .pipe(gulp.dest(rootPath+'/static/fonts'))
//     .pipe(fontmin())
//     .pipe(gulp.dest(rootPath+'/fonts'))
//     .pipe(notify({ message: 'fonts task ok' }));
// });


// 运行程序
gulp.task('default',['clean'],()=>{
  gulp.run('styles', 'scripts', 'html', 'images',"myWebpack");
});
