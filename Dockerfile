FROM node:17-alpine3.14

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm isntall

COPY . .

EXPOSE 3000

CMD npm start