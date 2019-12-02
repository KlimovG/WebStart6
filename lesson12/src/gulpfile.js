


const csso = require('gulp-csso');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');




// Gulp task to minify CSS files
gulp.task('styles', function () {
  return gulp.src('./css/styles.css')
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'))
});

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch("./css/*.css").on('change', browserSync.reload);
});