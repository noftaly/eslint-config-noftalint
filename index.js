module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
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
  overrides: [
    {
      files: ['./test/**/*.ts', './src/**/*.spec.ts'],
      rules: {
        'node/no-unpublished-import': 'off',
        'import/no-extraneous-dependencies': 'off',
        'max-nested-callbacks': 'off',
      },
    }, {
      files: ['*.config.ts', '*.config.js', '.*rc.js'],
      rules: {
        'import/no-commonjs': 'off',
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
