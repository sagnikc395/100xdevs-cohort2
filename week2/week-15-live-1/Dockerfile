## docker file example for this app ; btw this is a comment 
FROM node:20-alpine 

WORKDIR /app 

COPY . .

RUN npm install 
RUN npx prisma generate
RUN npm run build 



EXPOSE 3000 

CMD ["node","dist/index.js"]