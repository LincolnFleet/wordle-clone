# docker build -t wordle-clone .

# docker run \
# --name wordle-clone \
# --rm \
# --tty \
# --interactive \
# --mount type=bind,src="$(pwd)",dst=/app \
# --publish "3000:3000" \
# wordle-clone:latest \
# bash

# base image for env
FROM node:18.2.0

# change to new dir in env
WORKDIR /app

# change linux user to node, from root
USER node

# create var for socket port bridging
ENV WDS_SOCKET_PORT=0
