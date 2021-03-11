FROM node:lts-alpine as build-stage

WORKDIR /var/www/html/frontend/

COPY package*.json ./
RUN npm install

COPY . .
