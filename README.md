# Descripción



## Correr en dev


1. Clonar el repositorio.
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias ```npm install```
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de Primsa ```npx prisma migrate dev```
6. Ejecutar seed ```npm run seed```
7. Correr el proyecto ```npm run dev```
8. Limpiar el localStorage del navegador.

9. Desplegar a la base de datos ```npx prisma migrate deploy```


## Correr en pr


DATABASE_URL	
postgresql://neondb_owner:******@ep-bitter-wave-a5jpab5x-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require

DATABASE_URL_UNPOOLED	
postgresql://neondb_owner:******@ep-bitter-wave-a5jpab5x.us-east-2.aws.neon.tech/neondb?sslmode=require