#/bin/bash
set -x

echo cd tt-bot-deploy en home
cd /home/ubuntu/omicflows-frontend-deploy
echo docker-compose kill
docker-compose -f docker-compose.production.yml kill
# Delete all stopped containers
docker ps -q -f status=exited | xargs --no-run-if-empty docker rm
# Delete all dangling (unused) images
docker images -q -f dangling=true | xargs --no-run-if-empty docker rmi
