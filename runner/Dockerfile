FROM mcr.microsoft.com/playwright:v1.26.0-focal
RUN apt-get update && apt-get install -y jq
WORKDIR /workspace
RUN chown -R pwuser:pwuser /workspace /usr/local
RUN npm install -g playwright-core@1.26.0 start-server-and-test http-server
USER pwuser