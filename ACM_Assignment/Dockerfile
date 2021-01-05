FROM node

ENV MYSQL_ROOT_PASSWORD=my-secret-pw

RUN apt-get update
RUN mkdir -p /home/app

COPY . /home/app

CMD ["node", "home/app/server.js"]

