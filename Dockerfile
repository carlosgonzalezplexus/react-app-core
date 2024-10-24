FROM node:18-bullseye
RUN apt-get -y update && apt-get -y install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb chromium
RUN npx cypress install
WORKDIR /home/node
EXPOSE 3000
COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npx update-browserslist-db@latest
CMD ["bin/sh"]