module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/strict',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {},
};
