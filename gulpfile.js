var browserSync = require('browser-sync');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');//自动前缀
var sass = require('gulp-sass');//sass
var rename = require('gulp-rename');//重命名
var cssnano = require('gulp-cssnano');//css压缩
var uglify = require('gulp-uglify');//js压缩
var concat = require('gulp-concat');//js合并

var dist = __dirname + '/dist';

var yargs = require('yargs').options({
    w: {
        alias: 'watch',
        type: 'boolean'
    },
    s: {
        alias: 'server',
        type: 'boolean'
    },
    p: {
        alias: 'port',
        type: 'number'
    }
}).argv;


gulp.task('build:style',['build:font'],function(){
    gulp.src('src/style/style.scss')
    .pipe(sass().on('error', function(e){
        console.error(e.message);
    }))
    .pipe(gulp.dest(dist+'/style/css'))
    .pipe(cssnano())
    .pipe(
      rename(function(path) {
        path.basename += '.min';
      })
    )
    .pipe(gulp.dest(dist+'/style/css'));
})
gulp.task('build:font',function(){
    gulp.src('src/style/font/**/*')
    .pipe(gulp.dest(dist+'/style/font'));
    gulp.src('src/style/images/**/*')
    .pipe(gulp.dest(dist+'/style/images'));
})

gulp.task('build:js',function(){
	gulp.src(['src/js/**/*','!src/js/zepto.min.js'])
    .pipe(uglify())
    .pipe(concat('common.js'))
    .pipe(gulp.dest(dist+'/style/js'))
})

gulp.task('copy:lib',function(){
    gulp.src(['src/lib/**/*','src/js/zepto.min.js'])
    .pipe(gulp.dest(dist+'/style/lib'))
})

gulp.task('build:html',function(){
	gulp.src('src/html/**/*')
    .pipe(gulp.dest(dist+'/html'))
})


gulp.task('watch', ['copy:lib'], function() {
    gulp.watch('src/style/**/*', ['build:style']);
    gulp.watch('src/js/**/*', ['build:js']);
    gulp.watch('src/html/**/*', ['build:html']);
});


gulp.task('server', function() {
    yargs.p = yargs.p || 8080;
    browserSync.init({
        files: ['**'],
        server: {
            baseDir: './dist'
        },
        ui: {
            port: yargs.p + 1,
            weinre: {
                port: yargs.p + 2
            }
        },
        port: yargs.p,
        startPath: '/'
    });
});


/**
 * 默认编译
 * -s启动服务
 * -p服务端口，默认8080
 * -w启动监听
 */
gulp.task('default', [], function() {
    if (yargs.s) {
        gulp.start('server');
    }
    if (yargs.w) {
        gulp.start('watch');
    }
});