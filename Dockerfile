FROM node:latest

WORKDIR /app

COPY packge*.json .

RUN npm install

COPY . .

CMD [ "npm" , "start" ]