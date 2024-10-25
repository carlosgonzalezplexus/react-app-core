# Plantilla para aplicación React

Plantilla para aplicación front en React 18 con Typescript, desde [Create React App](https://github.com/facebook/create-react-app).

Testing en [Cypress](https://docs.cypress.io/) con [Testing Library](https://testing-library.com/docs/).

Ejecutable dentro de contenedor Docker

# Entorno de desarrollo

Configurado para ejecutarse localmente dentro de un contenedor docker.

## Preparar entorno

**Levaltar aplicación en contenedor docker**

```
docker-compose up
```

Ejecuta automáticamente npm start

**Entrar a terminal dentro del contenedor docker**

Obtener id del contenedor:

```
docker ps

docker exec -ti [id-contenedor] sh

```


## Scripts

In the project directory, you can run:

### `npm start`

Ejecutar aplicación para desarrollo.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Lanza una vez colección completa de test en Cypress

### `npm test:watch`

Lanza colección test refrescandose cuando se modifican ficheros.

### `npm generate:api`

Genera clientes REST con [Orval](https://orval.dev/overview) a partir de fichero configuracion

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Herramientas

[Typescript](https://www.typescriptlang.org/docs/)
[Docker](https://docs.docker.com/)

**Testing**

[Cypress](https://docs.cypress.io/)

fichero component-index.html define plantilla dentro de la que se renderizan los componentes en los test

[Testing Library](https://testing-library.com/docs/)

**Automatic api generation**

[Orval](https://orval.dev/overview)


# Docs

Ejemplo de documentación de uso de aplicación aprovechando snapshots de cypress.

[Documentation](./docs/main/index.md)