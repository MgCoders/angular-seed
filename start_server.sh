#/bin/bash
set -x
echo Logging in to Amazon ECR...
$(aws ecr get-login --region us-east-1)
echo cd omicflows-frontend-deploy en home
cd /home/ubuntu/omicflows-frontend-deploy
echo docker-compose up
docker-compose -f docker-compose.production.yml build && docker-compose -f docker-compose.production.yml pull && docker-compose -f docker-compose.production.yml up angular-seed && docker-compose -f docker-compose.production.yml up -d angular-seed-nginx
