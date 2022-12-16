# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT=14-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

ENV NPM_VERSION=9.1.2

# install additional OS packages.
RUN npm install -g npm@${NPM_VERSION} \
    @angular/cli@15.0.0

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
     && apt-get -y install --no-install-recommends \
     chromium
ENV CHROME_BIN=/usr/bin/chromium


#     @angular-devkit/build-angular:dev-server
# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN su node -c "npm install -g <your-package-list -here>"

