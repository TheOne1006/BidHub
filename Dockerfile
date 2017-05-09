FROM node:6.10.2

# Copy application files
COPY ./build /app
WORKDIR /app
RUN rm -rf node_modules && npm install --production
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
EXPOSE 3000

CMD [ "node", "app.js" ]
