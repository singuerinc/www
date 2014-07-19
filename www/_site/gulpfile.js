var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('default', function () {
    gulp.src('public/css/*.css')
        .pipe(concatCss("all.css"))
        .pipe(gulp.dest('public'));
});