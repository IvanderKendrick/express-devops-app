# syntax=docker/dockerfile:1.7

FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

COPY src ./src
COPY package.json .

ENV NODE_ENV=production

EXPOSE 3000

USER node

CMD ["npm", "start"]