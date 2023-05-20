# Establecer la imagen base
FROM node:18.16.0

#Crear y establecer el directorio de mi contedor
WORKDIR /clase-36

#Copio todos los archivos de src y tambien mi package.json

COPY src ./src
COPY package*.json ./

#Instalar dependencias

RUN npm install

#Puerto de mi app

EXPOSE 6000

#Comando para iniciar mi aplicacion

CMD [ "node", "src/index.js" ]

#Comando para compilar: docker build -t index.js .
#Comando para ejecutar: docker run -p 8080:8080 index.js