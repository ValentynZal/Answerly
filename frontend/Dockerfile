FROM node

WORKDIR /app/frontend
COPY package.json /app/frontend

RUN npm install -g yarn
RUN yarn install

EXPOSE 3000
CMD ["yarn", "start"]