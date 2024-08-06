FROM node:20 AS base

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

FROM base AS development

EXPOSE 5173

CMD ["yarn", "dev"]

FROM base AS build

RUN yarn build

FROM node:20-alpine3.18 as production

WORKDIR /usr/src/app

RUN yarn global add serve

COPY --from=build /usr/src/app/dist ./dist

EXPOSE 5000

CMD ["serve", "-s", "dist", "-l", "5000"]