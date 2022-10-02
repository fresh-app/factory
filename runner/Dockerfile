FROM mcr.microsoft.com/playwright:v1.26.0-focal
RUN apt-get update && apt-get install -y jq
WORKDIR /workspace
RUN chown -R pwuser:pwuser /workspace /usr/local
USER pwuser