echo "Pushing to gh-pages branch"
git checkout master
git subtree split --prefix _site -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
echo "Finished publishing"