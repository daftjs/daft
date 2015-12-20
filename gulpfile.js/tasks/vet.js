// GENERATE DOCS WITH JSDOC
var gulp   = require('gulp'),
    eslint = require('gulp-eslint');

gulp.task('vet', function() {
  gulp.src(['./src/**/*.js','!node_modules/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});
