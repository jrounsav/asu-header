#!/bin/bash
if [[ $TRAVIS_BRANCH == 'dev' ]]
then
    gulp dev
elif [[ $TRAVIS_BRANCH == 'qa' ]]
then
    gulp qa
elif [[ $TRAVIS_BRANCH == 'master' ]]
then
    gulp master
fi
