module.exports = {
  env: {
    node: true,
  },

  rules: {
    // Enforce return after a callback
    'callback-return': 'off',

    // Require all requires be top-level
    'global-require': 'off',

    // Enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',

    // Disallow use of the Buffer() constructor
    'no-buffer-constructor': 'error',

    // Disallow mixing regular variable and require declarations
    'no-mixed-requires': 'off',

    // Disallow use of new operator with the require function
    'no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    'no-path-concat': 'error',

    // Disallow use of process.env
    'no-process-env': 'off',

    // Disallow process.exit()
    'no-process-exit': 'off',

    // Restrict usage of specified node modules
    'no-restricted-modules': 'off',

    // Disallow use of synchronous methods (off by default)
    'no-sync': 'off',
  },
};
