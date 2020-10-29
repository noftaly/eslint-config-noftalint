module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/strict',
    './rules/style',
    './rules/unicorn',
    './rules/variables',
  ].map(require.resolve),
  reportUnusedDisableDirectives: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  overrides: [{
    files: ['.eslintrc.js'],
    rules: { 'import/no-commonjs': 'off' },
  }],
};
