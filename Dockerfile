# docker run -v "$(pwd)":/app -p "3000:3000" -it wordle-clone bash
# docker build -t wordle-clone .

FROM node:18.2.0
WORKDIR /app
USER node
ENV WDS_SOCKET_PORT=0
