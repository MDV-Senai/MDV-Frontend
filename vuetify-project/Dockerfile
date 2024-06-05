FROM node:20 AS base

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

FROM base AS development

EXPOSE 5173

CMD ["yarn", "dev"]
