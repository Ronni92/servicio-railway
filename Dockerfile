# Usa una imagen ligera de Nginx como servidor web
FROM nginx:alpine

# Copia tus archivos al directorio público de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto 3000 (por defecto en Nginx)
EXPOSE 3000
