FROM node

WORKDIR /frontend
COPY package.json /frontend

RUN npm install -g yarn
RUN yarn install

EXPOSE 3000
CMD ["yarn", "start"]