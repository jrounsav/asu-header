var gulp = require('gulp');
var gutil = require('gulp-util');
var git = require('gulp-git');
var gitrev = require('git-rev');
var shel = require('gulp-shell');

gulp.task('default', function(){
    gitrev.branch(function (str) {
        gutil.log('not branch', str)
    });
    shell.task('echo $TRAVIS_BRANCH');
});