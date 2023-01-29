FROM mcr.microsoft.com/playwright:v1.26.0-focal
RUN apt-get update && apt-get install -y jq sudo unzip
RUN echo 'pwuser ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers
WORKDIR /workspace
RUN chown -R pwuser:pwuser /workspace /usr/local /usr/lib/node_modules && chmod a+w /usr/bin
USER pwuser
RUN npm install -g playwright-core@1.26.0 start-server-and-test http-server