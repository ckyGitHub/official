var gulp = require("gulp");
var concat = require("gulp-concat");
var csso = require("gulp-csso");
var replace = require("gulp-replace");
var build = require("gulp-html-replace");


// 合并css
gulp.task("concatCss", function() {
	return gulp.src(['./public/css/*.css','./public/css/**/*.css'])
		        .pipe(concat("ow_mobile.min.css"))
		        .pipe(csso())
		        .pipe(gulp.dest("./build/public/css/"));
});

// 转移script文件夹
gulp.task("moveJs", function() {
	return gulp.src(["./public/js/*.js"])
	            .pipe(gulp.dest("./build/public/js/"));
});

//转移img文件夹
gulp.task('moveimg', function() {
    gulp.src(['./public/images/*','./public/images/**/*'])
        .pipe(gulp.dest('./build/public/images/'));
});

//转移font文件夹
gulp.task('moveimg', function() {
    gulp.src(['./public/fonts/*','./public/fonts/**/*'])
        .pipe(gulp.dest('./build/public/fonts/'));
});

// 替换HTML文件中的线下地址
gulp.task('replace', function() {
    gulp.src(['./html/*.html', './index.html'])
        .pipe(replace(/(\.\.\/){0,4}public/g, 'http://cloudliving-img.b0.upaiyun.com/static/Home/ow_mobile'))
        .pipe(build({
            'css':'http://cloudliving-img.b0.upaiyun.com/static/Home/ow_mobile/css/ow_mobile.min.css'
        }))
        .pipe(gulp.dest('./build/html/'));
});


gulp.task('default',['concatCss','moveJs','moveimg','replace']);