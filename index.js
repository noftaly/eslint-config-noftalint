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
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es2022: true,
    node: true,
  },
  overrides: [
    {
      files: ['./test/', './src/**/*.(spec|test).(j|t)s'],
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
