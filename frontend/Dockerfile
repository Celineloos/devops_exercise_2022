
# Angular production
FROM node:16 as builder

WORKDIR /app

COPY package.json /app

RUN npm install && npm install -g @angular/cli@latest

COPY . /app

RUN npm run build

# Nginx
FROM nginx:latest as production

COPY --from=builder /app/dist/* /app

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# Angular development
FROM node:16 as dev

WORKDIR /app

COPY package.json /app

RUN npm install && npm install -g @angular/cli@latest

COPY . /app

CMD npm start