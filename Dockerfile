FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

COPY . .

RUN npm run build

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser

EXPOSE 8080
CMD [ "http-server", "dist" ]