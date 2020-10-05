#! /usr/bin/env zsh

set -e

rm -rf dist
npm run tsc
sudo npm i -g
hotline dsa
