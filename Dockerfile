# pull official base image
from node:20 as build-deps

# set working directory
WORKDIR /home/avenenga/drewvpopc-live

COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.25.1-alpine
COPY --from=build-deps /home/avenenga/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]