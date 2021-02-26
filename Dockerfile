FROM node:15 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG APP
RUN npm run build $APP

FROM node:15-alpine
EXPOSE 3000
ENTRYPOINT [ "/usr/local/bin/node" ]
CMD [ "/app/main.js" ]
RUN addgroup -S nodegrp && adduser -S nodeuser -G nodegrp
WORKDIR /app
RUN chown nodeuser:nodegrp .
USER nodeuser
COPY --chown=nodeuser:nodegrp --from=build /app/package.json .
COPY --chown=nodeuser:nodegrp --from=build /app/package-lock.json .
RUN npm ci --only=production
ARG APP
COPY --chown=nodeuser:nodegrp --from=build /app/dist/apps/$APP .
RUN npm cache clean --force
