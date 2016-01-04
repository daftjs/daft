var browserSync = require('browser-sync').create()
var gulp = require('gulp')
var sass = require('gulp-sass')

// STYLES
gulp.task('css', function () {
  gulp.src('./public/css/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./public/css'))
      .pipe(browserSync.stream())
})

gulp.task('js', function () {
  gulp.watch('./src/**/*.js', ['build'])
  gulp.watch('./public/**/*.js').on('change', browserSync.reload)
})

// SERVER
gulp.task('serve', ['css', 'js'], function () {
  browserSync.init({
    server: {
      baseDir: './public/'
    },
    open: false,
    port: 1980
  })

  gulp.watch('./public/css/*.scss', ['sass'])
  gulp.watch('./public/**/*.html').on('change', browserSync.reload)
})
