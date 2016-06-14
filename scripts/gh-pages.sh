npm run build

rm ./dist/build/index.html
cp -R ./src/index.ghpages.html ./dist/build/index.html
gh-pages -d dist/build