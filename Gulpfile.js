var gulp = require('gulp');
var gutil = require('gulp-util');
var git = require('gulp-git');
var gitrev = require('git-rev');
var run = require('gulp-run');

gulp.task('default', function(){
    gitrev.branch(function (str) {
        gutil.log('not branch', str)
    });
    return run('echo $TRAVIS_BRANCH').exec()
        .pipe(gutil.log());
});