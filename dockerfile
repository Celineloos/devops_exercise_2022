FROM node:14

WORKDIR /app

ENV MONGO_URL=mongodb://localhost:27017
ENV DB_NAME=myapp
ENV PORT=3000

COPY ./api /app

RUN npm install

EXPOSE 3000

CMD npm start