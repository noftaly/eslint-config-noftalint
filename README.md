# eslint-config-noftalint

![npm version](https://img.shields.io/npm/v/eslint-config-noftalint?label=version)
![downloads](https://img.shields.io/npm/dt/eslint-config-noftalint)

This package provides Noftaly's .eslintrc as an extensible shared config.

## Usage

This config contains all of my ESLint rules, including ECMAScript 6+. It requires `eslint`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-noftalint@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-noftalint
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "eslint-config-noftalint@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

2. Add `"extends": "noftalint"` to your `.eslintrc`.

## Links

Github repository : [eslint-config-noftalint](https://github.com/noftaly/eslint-config-noftalint)
NPM package : [eslint-config-noftalint](https://www.npmjs.com/package/eslint-config-noftalint)

## Credits

Inspired by the [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
