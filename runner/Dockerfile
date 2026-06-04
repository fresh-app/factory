FROM node:24.13.1-bookworm
RUN apt-get update && apt-get install -y bash curl git jq sudo unzip
RUN echo 'node ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers
RUN corepack enable
RUN corepack install --global pnpm@latest
ENV PNPM_HOME="/pnpm-bin"
ENV PATH="/pnpm-bin/bin:${PATH}"
RUN mkdir /pnpm-bin && chown node:node /pnpm-bin
COPY setup-pnpm-builds /usr/local/bin/setup-pnpm-builds
RUN chmod +x /usr/local/bin/setup-pnpm-builds
USER node
WORKDIR /workspace
RUN pnpm install --global http-server