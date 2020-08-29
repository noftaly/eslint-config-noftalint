module.exports = {
  extends: './index.js',
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/no-commonjs': 'off',
  },
  env: {
    node: true,
  },
};
