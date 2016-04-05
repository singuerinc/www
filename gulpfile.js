var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task('min-js', function() {
   return gulp.src('./all.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./'));
});

gulp.task('min-css', function() {
   return gulp.src('./all.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['min-css', 'min-js'], function() {

});
