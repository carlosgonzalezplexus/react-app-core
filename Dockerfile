FROM node:18-bullseye
RUN apt-get -y update
# cypress testing
RUN apt-get -y install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
# add browser for testing
RUN apt-get -y install chromium

RUN npx cypress install
