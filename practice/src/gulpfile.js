
const {src, dest, watch, series} = require('gulp');
// const csso = require('gulp-csso');
// const rename = require("gulp-rename");
const browserSync = require('browser-sync').create(); 
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');
// const jp2 = require('gulp-jpeg-2000');
const image = require('gulp-image');


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
  watch("./js/*.js").on('change', browserSync.reload);

};


// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
}; 

function buildCSS(done) {
  src(['css/**.css', '!css/**/**.min.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // .pipe(rename({suffix: '.min'}))
    .pipe(dest('../dist/css/'));
  src('css/**.min.css')
    .pipe(dest('../dist/css/'))
  done();
}

function buildJS(done) {
  src(['js/**/**.js', '!js/**/**.min.js'])
    .pipe(minify())
    .pipe(dest('../dist/js/'));
  src('js/**.min.js').pipe(dest('../dist/js'));
    done();
}


function html(done) {
  src('**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('../dist/'));
  done();
}

function php(done) {
  src('php/**.php')
    .pipe(dest('../dist/php/'));
  src('phpmailer/**.php')
    .pipe(dest('../dist/phpmailer/'))
  done();
} 

function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('../dist/fonts'));
  done();
} 

function imgCompress(done) {
  src('img/**/**')
    .pipe(image())
    .pipe(dest('../dist/img/'));
  src('img/**.svg')
    .pipe(dest('../dist/img/'))
    
  done();
}
 
// function imgCompress(done) {
//   src('img/**/**')
//     .pipe(imagemin())
//     .pipe(dest('../dist/img/'))
//   done();

// }

// function convertJP2(done) {
//   return src('../dist/img/**.jpg')
//     .pipe(jp2())
//     .pipe(dest('../dist/img'));
// }


exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, fonts, php, imgCompress)
exports.buildH = html;
exports.buildJS = buildJS;