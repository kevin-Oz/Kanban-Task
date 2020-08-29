# kanban-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Desplegar con docker
```
docker build -t kanban:v1 .
```
```
docker run --rm --name vuex-container -p 127.0.0.1:4002:80 -i kanban:v1 

