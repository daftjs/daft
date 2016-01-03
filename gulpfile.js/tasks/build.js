var babel = require('gulp-babel')
var gulp = require('gulp')
var gutil = require('gulp-util')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var webpack = require('webpack')

gulp.task('minify', function () {
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
  webpack(require('../../webpack.config.js'), function (err, stats) {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({
    }))
    callback()
  })
})

gulp.task('build', ['webpack', 'minify'])
