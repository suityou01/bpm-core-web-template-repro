# Base
ARG NODE_VERSION=20.13.1
FROM node:${NODE_VERSION}-slim AS base
ENV NODE_ENV=production
ARG PORT=3000
WORKDIR /src
RUN \
    --mount=type=cache,target=/var/cache/apt \
    apt-get update && apt-get upgrade -y

RUN npm install -g pnpm

# Install
FROM base AS install
COPY package.json pnpm-lock.yaml ./
RUN \
    --mount=type=cache,target=~/.pnpm \
    pnpm ci --omit-dev
COPY . .

FROM install AS build
RUN \
    --mount=type=cache,target=/src/node_modules/.cache/nuxt/builds/ \
    pnpm run build \
    pnpm prune

# Run
FROM build
ENV PORT=$PORT
#COPY --from=build /src/.output /src/.output
#COPY --from=build /src/node_modules ./src/node_modules
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules
EXPOSE 3000
EXPOSE 24678
CMD [ "node", ".output/server/index.mjs" ]