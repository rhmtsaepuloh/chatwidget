FROM telkomindonesia/alpine:nodejs-10

# Set Arguments On Build
ARG ARGS_NODE_BUILD=development

# Set Environment Variable
ENV ARGS_NODE_START=${ARGS_NODE_BUILD}
ENV BABEL_DISABLE_CACHE=1

# Set Working Directory
WORKDIR /usr/src/app

# Copy Node Packages Requirement
COPY package*.json ./

# Install Node Modules Based On Node Packages Requirement
RUN apk add --update --no-cache --virtual .build-dev \
      build-base \
      python \
      python-dev \
    && npm i -g npm \
    && npm i -g node-sass \
    && npm i -g node-gyp \
    && npm i -g serve \
    && npm i \
    && npm rebuild node-sass \
    && apk del .build-dev

# Copy Node Source Code File
COPY . .

# Build Node Source Code File
RUN npm run build


# Change Working User to "User"
USER user

# Expose Application Port
EXPOSE 3009

# Run The Application
CMD ["sh", "-c", "serve -s -l 3009 build"]

