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

FROM node:18.2.0
WORKDIR /app
USER node
ENV WDS_SOCKET_PORT=0
