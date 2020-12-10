# mgr

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

### Lints and fixes files
```
npm run lint
```

### 打包
```
npm run lib
```

### rollup 打包
```
rollup -c rollup.config.js
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
{
  "name": "llj-ui",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "lib": "vue-cli-service build --target lib --name kui --dest lib packages/index.js"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "llj-ui": "^0.1.3",
    "vue": "^2.6.11"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^4.4.0",
    "@vue/cli-plugin-eslint": "^4.4.0",
    "@vue/cli-service": "^4.4.0",
    "autoprefixer": "^10.1.0",
    "babel-eslint": "^10.1.0",
    "babel-plugin-import": "^1.13.3",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.2.2",
    "postcss-base64": "^0.7.1",
    "postcss-scss": "^3.0.4",
    "rollup-plugin-postcss": "^4.0.0",
    "rollup-plugin-progress": "^1.1.2",
    "rollup-plugin-url": "^3.0.1",
    "rollup-plugin-vue2": "^0.8.1"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {}
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}