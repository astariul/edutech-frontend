#!/usr/bin/env bash
echo "> FE 배포"
# sudo cp -rf /home/ubuntu/supercoding-front/dist/* /var/www/html
source /home/ubuntu/.profile
cd /home/ubuntu/supercoding-front
npx --yes serve -s build -l 3000
