# PRUEBA TÉCNICA KS2: Backend

Esta API permite realizar pruebas con datos de usuarios ficticios, utiliza nodejs express para el manejo de solicitudes HTTP y controla el manejo de errores con hapi/boom

## Prerrequisitos

- Node.js instalado en tu sistema.
- NPM (viene con Node.js).

## Instalación

- Para comenzar, clona este repositorio y sigue los pasos a continuación:

1. Abre una terminal, puede ser cmd, powershell, entre otros.
2. Navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.


## Uso

### Obtener todos los usuarios

- **GET** `/users`

Obtiene todos los recursos disponibles.

### Obtener usuario

- **GET** `/users/:id`

Obtiene un usuario por su ID proporcionado.

### Crear un usuario

- **POST** `/users`

Crea un nuevo usuario con la información proporcionada en el cuerpo (body) de la solicitud.

### Actualizar un usuario

- **PUT** `/users/:id`

Actualiza el usuario especificado por el ID proporcionado. Reemplaza el recurso completo.

### Eliminar un recurso

- **DELETE** `/users/:id`

Elimina el recurso especificado por el ID proporcionado. 

## Recursos utilizados

- Express: https://expressjs.com/es/
- hapi Boom: https://hapi.dev/module/boom/api/?v=10.0.1
