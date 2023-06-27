FROM node:16

WORKDIR /usr/app

COPY . .

ADD package*.json ./

RUN npm install

RUN npm test


CMD [ "npm",  "start"]
EXPOSE 8000
