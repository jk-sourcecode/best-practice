FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ["package.json", "/usr/src/app/"]
COPY ["server.js", "/usr/src/app/"]
COPY ["app.js", "/usr/src/app/"]
COPY ["src", "/usr/src/app/src"]
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]