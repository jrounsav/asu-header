if [[ $TRAVIS_BRANCH == 'dev' ]]
  gulp dev
elif [[ $TRAVIS_BRANCH == 'qa' ]]
  gulp qa
elif [[ $TRAVIS_BRANCH == 'master' ]]
  gulp master
fi
