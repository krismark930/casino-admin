sudo docker login  -u admin -p Fh7FSgEQ6hMn8MB7Q4URnh76eEDdIXAg https://docker.biyong.com/

## api

sudo docker rm -f film-admin

sudo docker run  --restart=always --network phoenix --name film-admin -p 10002:9001 -d docker.biyong001.com/pre/phoenix-admin:1.0.0-2