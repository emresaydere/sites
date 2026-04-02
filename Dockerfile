# Aşama 1: Build (İnşa)
FROM node:20-alpine AS build
WORKDIR /app

# Bağımlılıkları kopyala ve yükle
COPY package*.json ./
RUN npm ci

# Kaynak kodları kopyala ve projeyi derle
COPY . .
RUN npm run build

# Aşama 2: Production (Üretim - Sunum)
FROM nginx:alpine

# Derlenen dosyaları Nginx'in sunacağı dizine kopyala
COPY --from=build /app/dist /usr/share/nginx/html

# React Router gibi SPA (Single Page Application) yönlendirmeleri için Nginx ayarını yap
RUN echo "server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files \$uri \$uri/ /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

# 80 portunu aç
EXPOSE 80

# Nginx'i başlat
CMD ["nginx", "-g", "daemon off;"]
