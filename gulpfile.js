
const {src, dest, watch} = require('gulp');
// const csso = require('gulp-csso');
// const rename = require('gulp-rename');
const browserSync = require('browser-sync').create(); 
const sass = require('gulp-sass');





// Gulp task to minify CSS files
// gulp.task('styles', function () {
//   return gulp.src('./css/styles.css')
//     // Minify the file
//     .pipe(csso())
//     // Output
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest('./css'))
// });

// Static server
function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("app/*.html").on('change', browserSync.reload);
};


// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
    .pipe(sass())
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
};

exports.serve = bs;