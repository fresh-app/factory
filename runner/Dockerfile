FROM node:20-alpine
RUN apk add --no-cache jq unzip bash curl git
RUN corepack enable
RUN corepack install --global pnpm@latest
USER node
WORKDIR /workspace