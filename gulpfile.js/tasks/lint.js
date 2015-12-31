// LINT JAVASCRIPT WITH ES LINT
var gulp = require('gulp')
var standard = require('gulp-standard')

gulp.task('lint', function () {
  gulp.src(['./src/**/*.js', '!node_modules/**', '!./src/jqlite.js'])
      .pipe(standard())
      .pipe(standard.reporter('default', {
        breakOnError: true
      }))
})
