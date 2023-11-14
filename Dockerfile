# Usa la imagen oficial de Node.js
FROM node:20

# Establece el directorio de trabajo en /app
WORKDIR /myapp

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Comando para ejecutar la aplicación
CMD npm start
