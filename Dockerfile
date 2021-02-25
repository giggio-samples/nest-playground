FROM node:15 as build
WORKDIR /app
COPY .yarn .yarn
COPY package.json .yarnrc.yml yarn.lock ./
RUN yarn install --immutable
COPY . .
ARG APP
RUN yarn run build $APP

FROM node:15-alpine
EXPOSE 3000
ENTRYPOINT [ "/usr/local/bin/node" ]
CMD [ "/app/main.js" ]
RUN addgroup -S nodegrp && adduser -S nodeuser -G nodegrp
WORKDIR /app
RUN chown nodeuser:nodegrp .
USER nodeuser
COPY --chown=nodeuser:nodegrp --from=build /app/package.json .
COPY --chown=nodeuser:nodegrp --from=build /app/yarn.lock .
RUN npm install --production
ARG APP
COPY --chown=nodeuser:nodegrp --from=build /app/dist/apps/$APP .
RUN npm cache clean --force
