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

## Autosort imports on VSCode

If you want to autosort imports on Visual Studio code based on the "import/order" rule, you will have to do:
1. Install the extension "[Run On Save](https://marketplace.visualstudio.com/items?itemName=pucelle.run-on-save)" by Pucelle
2. In a terminal, run this command to install a package globally. It is used to fix with eslint only one rule: `npm i -g eslint-filtered-fix`
3. Go in the "Extension Settings" of "Run On Save" (click on the gear), and then in the category "Run On Save: Commands", click on
"Edit in settings.json"
4. Add this at the end of the file:
```json
"runOnSave.commands": [{
  "match": ".*\\.js$",
  "command": "cd ${workspaceFolder} && eslint-filtered-fix . --rule import/order",
  "runIn": "backend",
  "runningStatusMessage": "Sorting imports...",
  "finishStatusMessage": "Imports sorted!"
}]
```

## Links

Github repository : [eslint-config-noftalint](https://github.com/noftaly/eslint-config-noftalint)
NPM package : [eslint-config-noftalint](https://www.npmjs.com/package/eslint-config-noftalint)

## Credits

Inspired by the [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
