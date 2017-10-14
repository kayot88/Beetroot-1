/* Base */
const gulp = require('gulp');
const data = require('gulp-data');
const watch = require('gulp-watch');
const debug = require('gulp-debug');

/* Plugin for webserver*/
const browserSync = require("browser-sync");
const reload = browserSync.reload;

/* Plugin for HTML*/
const htmlmin = require('gulp-htmlmin');

/* Plugin for SASS*/
const sass = require('gulp-sass');

/*Task for HTML*/
gulp.task('html', () => {
     gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build'))
    .pipe(reload({ stream: true }));
});

/*Task for CSS*/
gulp.task('css', () => {
     gulp.src('./src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({ stream: true }));
});

/* Task Build */
gulp.task('build', ['html', 'css' ]);

/*Task for webserver*/
const config = {
  server: {
    baseDir: "./build"
  },
  tunnel: false,
  host: 'localhost',
  port: 9000,
  logPrefix: "denis.gorobzeev"
};

gulp.task('webserver', () => browserSync(config));

/* Task Watch */
gulp.task('watch', function () {
  watch('./src/*.html', () => gulp.run('html'));
  watch('./src/styles/**/*.scss', () => gulp.run('css'));
});

/* Task Default */
gulp.task('default', ['build', 'webserver', 'watch']);
