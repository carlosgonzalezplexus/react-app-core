FROM node:18-bullseye
RUN apt-get -y update && apt-get -y install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
WORKDIR /app
RUN npx cypress install
