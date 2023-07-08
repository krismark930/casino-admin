#!/bin/bash

ls 
pwd
npm install 

if [ "${EVN}" = "pre" ];then
    echo "pre"
    cp -f ./.env.pre ./.env.production
    npm run build
else
    echo "pro"
    # cp -f ./site/${SITE}/.env.production ./.env.production
    # cat ./.env.production
    # cp -f ./site/${SITE}/index.js ./src/router
    # cat ./src/router/index.js
    npm run build
fi