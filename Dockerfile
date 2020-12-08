FROM node:13-slim

WORKDIR /app

Add . /app

CMD node server.js
