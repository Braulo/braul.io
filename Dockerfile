FROM node:18.17-alpine as dependencies
WORKDIR /app
COPY package.json ./
RUN npm install 

FROM node:18.17-alpine as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

FROM node:18.17-alpine as runner
WORKDIR /app
ENV NODE_ENV production

# Ik we are in production but whatever
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.env.local ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/i18n.js i18n.js
COPY --from=builder /app/locales ./locales
COPY --from=builder /app/pages ./pages
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run",  "start"]