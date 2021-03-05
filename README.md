# eslint-config-noftalint

![npm version](https://img.shields.io/npm/v/eslint-config-noftalint?label=version)
![downloads](https://img.shields.io/npm/dt/eslint-config-noftalint)
![size](https://img.shields.io/bundlephobia/min/eslint-config-noftalint?label=package%20size)

This package provides Noftaly's .eslintrc as an extensible shared config.
[See the comparison with airbnb, google and standard's config here](https://github.com/noftaly/eslint-config-noftalint/blob/master/docs/comparison.md)

## Table of Content

- [Usage](#usage)
- [Use with TypeScript](#use-with-typescript)
- [Links](#links)
- [Credits](#credits)

## Usage

- Install this package, with

```shell
$ npm i -D eslint           \
    eslint-config-noftalint \
    eslint-plugin-import    \
    eslint-plugin-node      \
    eslint-plugin-unicorn
```

- Add `noftalint` to your `.eslintrc.js`: `extends: ['noftalint']`

## Use with TypeScript

`noftalint` also contains typescript rules, from `@typescript-eslint/eslint-plugin`! They are not included by default, so you need to configure some things first.

1. Run the following command to install the required dependencies

```shell
$ npm i -D typescript         \
    @typescript-eslint/parser \
    @typescript-eslint/eslint-plugin
```

2. Update your `.eslintrc.js` configuration with the following values:

```js
module.exports = {
  extends: ['noftalint/typescript'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ...
};
```

3. Create a file named `tsconfig.eslint.json`, at the same level as your `tsconfig.json`.
4. Add this inside your `tsconfig.eslint.json`. The `includes` property must be all the files you want to lint, including JS files.

```json
{
  "extends": "./tsconfig.json",
  "include": [
    "src/**/*.ts",
    ".eslintrc.js"
  ]
}
```

If you want to use custom TypeScript's path aliases, you will have to follow these steps:

```shell
$ npm install --save-dev eslint-import-resolver-typescript
```

Update your `.eslintrc.js` by disabling `node/no-missing-import` as it does not support TypeScript's path aliases; and by updating the settings for `import/resolver`.

```js
module.exports = {
  ...
  rules: {
    ...
    // It cannot resolve TypeScript's path aliases. See https://github.com/mysticatea/eslint-plugin-node/issues/233
    'node/no-missing-import': 'off',
  },
  settings: {
    ...
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
```

If you use the shebang notation inside your project, you will need to modify the `node/shebang` rule in your `.eslintrc.js`:

```js
module.exports = {
  ...
  rules: {
    ...
    'node/shebang': ['error', {
      convertPath: {
        // Change your main file and your destination file to what you want
        'src/main.ts': ['^src/main.ts$', 'build/main.js'],
      },
    }],
  }
}
```

## Links

GitHub repository: [eslint-config-noftalint](https://github.com/noftaly/eslint-config-noftalint)\
npm package: [eslint-config-noftalint](https://www.npmjs.com/package/eslint-config-noftalint)

## Credits

Inspired by the [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)\
Generator adapted from [Canonical's generator](https://github.com/gajus/eslint-config-canonical/)
