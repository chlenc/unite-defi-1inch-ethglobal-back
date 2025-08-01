FROM node:18-alpine

# Устанавливаем зависимости для better-sqlite3
RUN apk add --no-cache python3 make g++ sqlite

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]