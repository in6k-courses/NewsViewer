# This image will be based on the official nodejs docker image
FROM node:4.4
RUN npm install -g npm angular-cli
RUN mkdir /client

COPY src client/src
COPY *.json client/
COPY e2e client/e2e

EXPOSE 4200

WORKDIR /client

RUN npm install

CMD ["npm", "run", "start"]
