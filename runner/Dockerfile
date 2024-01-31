FROM node:20-alpine
RUN apk add --no-cache jq unzip bash curl git
RUN corepack enable
RUN corepack install --global pnpm@latest
ENV PATH="/pnpm-bin:${PATH}"
ENV PNPM_HOME="/pnpm-bin"
RUN mkdir /pnpm-bin && chown node:node /pnpm-bin
USER node
WORKDIR /workspace
RUN pnpm install --global http-server