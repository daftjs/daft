// LINT JAVASCRIPT WITH ES LINT
var gulp   = require('gulp'),
    eslint = require('gulp-eslint');

gulp.task('lint', function() {
  gulp.src(['./src/**/*.js','!node_modules/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});
