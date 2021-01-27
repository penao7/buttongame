FROM node:alpine

WORKDIR /buttongame
COPY server . 
EXPOSE 5000
RUN npm install
CMD ["npm", "start"]
