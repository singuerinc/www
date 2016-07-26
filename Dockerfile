FROM iron/node:dev
VOLUME /usr/src/app

RUN mkdir -p /usr/src
COPY package.json /usr/src

WORKDIR /usr/src
RUN npm install -g webpack gulp
RUN npm install

WORKDIR /usr/src/app

CMD ["node", "bin/www"]