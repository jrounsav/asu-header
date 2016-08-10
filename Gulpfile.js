var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('dev', function(){
    gutil.log('made it to dev');
});

gulp.task('qa', function(){
    gutil.log('made it to qa');
});

gulp.task('master', function(){
    gutil.log('made it to master');
});