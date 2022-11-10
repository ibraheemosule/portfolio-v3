FROM node:18.12.0-slim

WORKDIR /portfolio

COPY package.json .

RUN yarn install

COPY . .

CMD [ "yarn", "dev" ]