# pull official base image
from node:20.4-alpine3.17

# set working directory
WORKDIR /home/avenenga/drewvpopc-live

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]