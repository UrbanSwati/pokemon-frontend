# Pokemon Frontend

Front end project created with Vue and Bootstrap.
It's consuming the [Pokemon API](https://github.com/UrbanSwati/pokemonapi)

The Application is currently hosted on AWS S3, [link](http://urbanswati-pokemon-webapp.s3-website-eu-west-1.amazonaws.com/)
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Running localy
### Docker
Build the image
```
docker build . -t pokemonfrontend
```
Then run the container
```
docker run -p 80:8080 -t pokemonfrontend 
```
Then go to [http://localhost](http://localhost) 

*If you get an error concerning port 80 already being allocated change to a different port*
example using port `8080`
```
docker run -p 8080:8080 -t pokemonfrontend 
```
Then go to [http://localhost:8080](http://localhost:8080) 
