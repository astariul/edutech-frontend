#!/usr/bin/env bash
echo "> FE 배포"
# sudo cp -rf /home/ubuntu/supercoding-front/dist/* /var/www/html
source /home/ubuntu/.profile
cd /home/ubuntu/supercoding-front

if [ "$DEPLOYMENT_GROUP_NAME" == "staging" ]
then
  npx --yes serve -s build -l 3000
fi

if [ "$DEPLOYMENT_GROUP_NAME" == "production" ]
then
  npx --yes serve -s build -l 3030
fi
