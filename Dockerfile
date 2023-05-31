FROM node:18.12-alpine

WORKDIR /cvproject

COPY . .

RUN rm -rf node_modules

RUN npm install

EXPOSE 5005

CMD ["node", "server.js"]