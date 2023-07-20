# pull official base image
from node:20.4-alpine3.17

# set working directory
WORKDIR /home/avenenga/drewvpopc-live

# The `COPY package.json yarn.lock ./` command is copying the `package.json` and `yarn.lock` files from the current directory to the root directory of the Docker image.
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]