var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'nested'}))
    .pipe(gulp.dest('./css'));
}); 

gulp.task('sass:watch', function() {
  // gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('*.scss', gulp.series(['sass']));
});
