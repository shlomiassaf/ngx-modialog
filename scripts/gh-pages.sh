originBranch=$(git symbolic-ref --short -q HEAD)

npm run build
git checkout gh-pages

branch=$(git symbolic-ref --short -q HEAD)
if [ "$branch" = "gh-pages" ]; then
  cp -R ./dist/build/* ./
  git add .
  git commit -m "gh-pages update"
  git push origin gh-pages
else
  echo Error: could not checkout gh-pages
fi

git checkout $originBranch