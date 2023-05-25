# Establecer la imagen base
FROM node:18.16.0

#Crear y establecer el directorio de mi contedor
WORKDIR /clase-36

#Variables de entorno en Dockerfile
#ENV DB_URI = mongodbatlas

#Agrego argumentos para el .env, por defecto en desarrollo
ARG ENV_FILE = .env.development

#Comando para ejecutar produccion: docker build --build-arg ENV_FILE= .env.production -t test2:production

#Copio todos los archivos de src y tambien mi package.json

COPY src ./src
COPY package*.json ./
COPY $ENV_FILE ./

#COPY .env ./ Funciona en tanto sea un unico .env
#Instalar dependencias

RUN npm install

#Puerto de mi app

EXPOSE 6000

#Comando para iniciar mi aplicacion

CMD [ "node", "src/index.js" ]

#Comando para compilar: docker build -t index.js .
#Comando para ejecutar: docker run -p 8080:8080 index.js