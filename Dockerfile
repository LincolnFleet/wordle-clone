# docker run --rm -it -v "$(pwd)":/app -p "3000:3000" wordle-clone:latest bash

# docker run \
# --name wordle-clone \
# --rm \
# --tty \
# --interactive \
# --mount type=bind,src="$(pwd)",dst=/app \
# --publish "3000:3000" \
# wordle-clone:latest \
# bash

# docker build -t wordle-clone .

FROM node:18.2.0
WORKDIR /app
USER node

ENV WDS_SOCKET_PORT=0
ENV PORT=3000

EXPOSE ${PORT}

CMD ["npm", "run", "start:dev"]
