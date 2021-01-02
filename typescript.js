module.exports = {
  extends: [
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
  rules: {},
};
