FROM node:16
RUN apt-get update && apt-get install -y expect
WORKDIR /workspace
RUN chown -R node:node /workspace
USER node