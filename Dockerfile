# Use una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de la aplicación
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que escucha tu aplicación
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD ["node", "app.ts"]