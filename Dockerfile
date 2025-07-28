FROM node:20-alpine as dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:20-alpine as builder
ARG STAGE
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
COPY ./deploy/${STAGE}/.env.production ./.env.production
RUN rm -rf .next
RUN yarn build

FROM node:20-alpine as runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/*.config.js ./

EXPOSE 3000
CMD ["yarn", "start"]