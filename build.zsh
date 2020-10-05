#! /usr/bin/env zsh

set -e

npm run tsc
snapcraft
sudo snap remove hotline
sudo snap install hotline_v0.1.0_amd64.snap --dangerous --devmode
hotline gh/me
