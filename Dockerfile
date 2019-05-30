from node:8

RUN mkdir /opt/myapp
WORKDIR /opt/myapp

COPY package.json /opt/myapp/

RUN npm install

ADD src /opt/myapp/src
ADD public /opt/myapp/public

RUN npm build

CMD ["npm", "start"]
