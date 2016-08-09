var gulp = require('gulp');
var gutil = require('gulp-util');
var git = require('gulp-git');
var gitrev = require('git-rev');

gulp.task('default', function(){
    gitrev.branch(function (str) {
        gutil.log('branch', str)
    })
});