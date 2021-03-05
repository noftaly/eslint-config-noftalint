module.exports = {
  plugins: ['node'],

  rules: {
    // Require return statements after callbacks
    // We warn as it has many false positives and negatives.
    'node/callback-return': 'warn',

    // Enforce either module.exports or exports
    'node/exports-style': 'error',

    // Enforce the style of file extensions in import declarations
    'node/file-extension-in-import': ['error', 'never'],

    // Require require() calls to be placed at top-level module scope
    'node/global-require': 'off',

    // Require error handling in callbacks
    'node/handle-callback-err': 'error',

    // Ensure Node.js-style error-first callback pattern is followed
    'node/no-callback-literal': 'error',

    // Disallow the assignment to exports
    'node/no-exports-assign': 'error',

    // Disallow import declarations which import extraneous modules
    'node/no-extraneous-import': 'warn',

    // Disallow require() expressions which import extraneous modules
    'node/no-extraneous-require': 'error',

    // Disallow deprecated APIs
    'node/no-deprecated-api': 'error',

    // Disallow import declarations which import non-existence modules
    'node/no-missing-import': 'error',

    // Disallow require() expressions which import non-existence modules
    'node/no-missing-require': 'error',

    // Disallow require calls to be mixed with regular variable declarations
    'node/no-mixed-requires': 'error',

    // Disallow new operators with calls to require
    'node/no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    'node/no-path-concat': 'error',

    // Disallow the use of process.env
    'node/no-process-env': 'off',

    // Disallow the use of process.exit()
    'node/no-process-exit': 'error',

    // Disallow specified modules when loaded by import declarations
    'node/no-restricted-import': 'off',

    // Disallow specified modules when loaded by import declarations
    'node/no-restricted-require': 'off',

    // Disallow synchronous methods
    'node/no-sync': 'error',

    // Disallow bin files that npm ignores
    'node/no-unpublished-bin': 'error',

    // Disallow import declarations which import private modules
    'node/no-unpublished-import': 'warn',

    // Disallow require() expressions which import private modules
    'node/no-unpublished-require': 'warn',

    // Disallow unsupported ECMAScript built-ins on the specified version
    'node/no-unsupported-features/es-builtins': 'error',

    // Disallow unsupported ECMAScript syntax on the specified version
    // Ignore ES6 modules because people might be using babel.
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],

    // Disallow unsupported Node.js built-in APIs on the specified version
    'node/no-unsupported-features/node-builtins': 'error',

    // Enforce either Buffer or require("buffer").Buffer
    'node/prefer-global/buffer': ['error', 'always'],

    // Enforce either console or require("console")
    'node/prefer-global/console': ['error', 'always'],

    // Enforce either process or require("process")
    'node/prefer-global/process': ['error', 'always'],

    // Enforce either TextDecoder or require("util").TextDecoder
    'node/prefer-global/text-decoder': ['error', 'never'],

    // Enforce either TextEncoder or require("util").TextEncoder
    'node/prefer-global/text-encoder': ['error', 'never'],

    // Enforce either URLSearchParams or require("url").URLSearchParams
    'node/prefer-global/url-search-params': ['error', 'never'],

    // Enforce either URL or require("url").URL
    'node/prefer-global/url': ['error', 'always'],

    // Enforce require("dns").promises
    'node/prefer-promises/dns': 'error',

    // Enforce require("fs").promises
    'node/prefer-promises/fs': 'error',

    // Make process.exit() expressions the same code path as throw
    'node/process-exit-as-throw': 'off',

    // Suggest correct usage of shebang
    'node/shebang': 'error',
  },
};
