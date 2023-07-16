FROM node:16-alpine

WORKDIR '/fibonacci'

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "run", "start"]