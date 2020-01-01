module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/html',
    './rules/imports',
    './rules/node',
    './rules/regex',
    './rules/strict',
    './rules/style',
    './rules/unicorn',
    './rules/variables',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {},
};
