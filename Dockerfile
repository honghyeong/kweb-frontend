FROM node:14-alpine

WORKDIR /usr/src/app

COPY *.json ./
COPY *.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build
EXPOSE 3001

CMD ["yarn","start"]