FROM node:20-bookworm
RUN apt-get update && apt-get install -y bash curl git jq sudo unzip
RUN echo 'node ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers
RUN corepack enable
RUN corepack install --global pnpm@latest
ENV PATH="/pnpm-bin:${PATH}"
ENV PNPM_HOME="/pnpm-bin"
RUN mkdir /pnpm-bin && chown node:node /pnpm-bin
USER node
WORKDIR /workspace
RUN pnpm install --global http-server