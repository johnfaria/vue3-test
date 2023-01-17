# develop stage
FROM node:16.16-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
COPY . .
