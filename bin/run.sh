#!/bin/sh
set -x
set -e
npm install --production
npm i -g rollup
npm run build

