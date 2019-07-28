FROM node

WORKDIR /frontend
COPY package.json /frontend

RUN npm install -g yarn
RUN yarn install --no-cache --production

EXPOSE 3000
CMD ["yarn", "start"]