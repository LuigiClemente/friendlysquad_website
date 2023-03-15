# Install dependencies only when needed
FROM node:14-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json yarn.lock /usr/src/app
ADD package.json /app/package.json
RUN yarn  
COPY . /usr/src/app
# If using npm with a `package-lock.json` comment out above and use below instead
# COPY package.json package-lock.json ./ --frozen-lockfile
# RUN npm ci
RUN yarn build

EXPOSE 3001

ENV PORT 3001

CMD ["yarn", "start"]

