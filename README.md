# eslint-config-backend
----------------------

Eslint config that we use in WebbyLab

## Usage

1. Install config with eslint and eslint plugins

```
npm install --save-dev eslint-config-backend eslint eslint-plugin-fetch eslint-plugin-import  eslint-plugin-prefer-spread eslint-plugin-more
```
or
```
yarn add -D eslint-config-backend eslint eslint-plugin-fetch eslint-plugin-import  eslint-plugin-prefer-spread eslint-plugin-more
```

2. Create own `.eslintrc`

```
{
    "extends": "backend"
}
```
