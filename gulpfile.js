// Sass configuration
let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let gulprename = require('gulp-rename')

gulp.task('sass', function() {
    gulp.src('styles\\*.scss')
        .pipe(sass())
        .on('error', function(err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
        .pipe(gulprename({
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('styles'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('styles\\*.scss', ['sass']);
});
