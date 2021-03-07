#!/usr/bin/env sh

# abort on errors
set -e

# build the docs
npm run docs:build

# navigate to the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Deploying the locally built /dist folder to master:gh-pages as its own commit history.'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:api3dao/api3-docs.git master:gh-pages

cd -