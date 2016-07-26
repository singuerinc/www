#VOLUME /usr/src/app
#FROM iron/node:dev

#RUN mkdir -p /usr/src
#COPY package.json /usr/src

#WORKDIR /usr/src
#RUN npm install -g gulp
#RUN npm install

#WORKDIR /usr/src/app

#CMD ["node", "bin/www"]


FROM mwallasch/docker-ruby-node
VOLUME ["/src/app"]
RUN mkdir -p /src
WORKDIR /src
RUN npm install phantomjs-prebuilt casperjs
RUN ln -s /src/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs /usr/local/bin/
CMD ["node_modules/casperjs/bin/casperjs", "test", "app/test.js"]