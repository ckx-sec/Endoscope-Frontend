# # Install dependencies only when needed
# FROM node:18-alpine AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.

# RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g'  /etc/apk/repositories
# RUN apk add curl
# RUN apk add --no-cache libc6-compat
# WORKDIR /app
# COPY package.json ./
# RUN yarn install --frozen-lockfile

# # If using npm with a `package-lock.json` comment out above and use below instead
# # COPY package.json package-lock.json ./ 
# # RUN npm ci

# # Rebuild the source code only when needed
# FROM node:18-alpine AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry during the build.
# # ENV NEXT_TELEMETRY_DISABLED 1

# RUN yarn build

# # If using npm comment out above and use below instead
# # RUN npm run build

# # Production image, copy all the files and run next
# FROM node:18-alpine AS runner
# WORKDIR /app

# ENV NODE_ENV production
# # Uncomment the following line in case you want to disable telemetry during runtime.
# # ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs


# # You only need to copy next.config.js if you are NOT using the default configuration
# # COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./package.json

# # # Automatically leverage output traces to reduce image size 
# # # https://nextjs.org/docs/advanced-features/output-file-tracing
# # COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# # COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# USER frontend

# EXPOSE 3000

# ENV PORT 3000

# CMD ["npm", "start"]


FROM node:18-alpine as builder 

WORKDIR /app

COPY package.json .

RUN npm install -g pnpm

RUN pnpm install 

COPY . .

RUN pnpm build


FROM nginx:1.19.0

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]