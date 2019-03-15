FROM node:11

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY LICENSE .
COPY README.md .
COPY newrelic.js .
COPY /public ./public
COPY /server ./server

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]