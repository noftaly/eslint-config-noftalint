module.exports = {
  extends: [
    './index.js',
    'plugin:import/typescript',
    './rules/typescript',
    './rules/typescript-extended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  overrides: [{
    files: ['**/*.ts'],
    settings: {
      node: { tryExtensions: ['.ts', '.d.ts', '.js'] },
    },
  }, {
    files: ['.eslintrc.js'],
    rules: {
      'import/no-commonjs': 'off',
      '@typescript-eslint/naming-convention': 'off',
    },
  }],
  globals: { NodeJS: true },
  rules: {
    // `node/file-extension-in-import` has too many false positives with `.json`.
    'node/file-extension-in-import': 'off',
    'import/extensions': ['error', 'never', { ts: 'never', json: 'always' }],
  },
};
