var gulp = require('gulp')
var gutil = require('gulp-util')
var babel = require('gulp-babel')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var requirejsOptimize = require('gulp-requirejs-optimize')
var uglify = require('gulp-uglify')
var webpack = require('webpack')

gulp.task('req', function () {
  return gulp.src('./src/daft.js')
	.pipe(requirejsOptimize())
	.pipe(gulp.dest('dist'))
})

gulp.task('babel', function () {
  console.log('running gulp task: babel')
  gulp.src('src/**/*.js')
      .pipe(babel({
        presets: ['es2015'],
        plugins: ['transform-es2015-modules-amd']
      }))
      .pipe(gulp.dest('./public/js/'))
      .pipe(gulp.dest('./dist/src/'))
})

gulp.task('concat', function () {
  console.log('running gulp task: concat')
  gulp.src('src/**/*.js')
      .pipe(babel({
        presets: ['es2015'],
        plugins: ['transform-es2015-modules-amd']
      }))
      .pipe(concat('daft.js'))
      .pipe(gulp.dest('./dist/'))
      .pipe(gulp.dest('./public/js/'))
      .pipe(uglify())
      .pipe(rename('daft.min.js'))
      .pipe(gulp.dest('./dist/'))
      .pipe(gulp.dest('./public/js/'))
})

gulp.task('minify', function () {
  console.log('running gulp task: concat')
  gulp.src('public/js/daft.js')
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest('./dist/'))
      .pipe(uglify())
      .pipe(rename('daft.min.js'))
      .pipe(gulp.dest('./dist/'))
})

gulp.task('webpack', function (callback) {
  // run webpack
  webpack(require('../../webpack.config.js'), function (err, stats) {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({
    }))
    callback()
  })
})

gulp.task('build', ['webpack', 'minify'])
