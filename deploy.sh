#!/usr/bin/env bash
echo "> FE 배포"
# sudo cp -rf /home/ubuntu/supercoding-front/dist/* /var/www/html
cd /home/ubuntu/supercoding-front
sudo npx serve -s build -l 3000
