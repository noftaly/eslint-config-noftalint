module.exports = {
  rules: {
    // Disallow specified identifiers
    'id-denylist': 'off',

    // Enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // Disallow deletion of variables
    'no-delete-var': 'error',

    // Disallow labels that share a name with a variable
    'no-label-var': 'error',

    // Disallow specific globals
    'no-restricted-globals': 'off',

    // Disallow declaration of variables already declared in the outer scope
    'no-shadow': ['error', {
      builtinGlobals: false,
      hoist: 'functions',
      allow: [],
    }],

    // Disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // Disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // Disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // Disallow use of undefined variable
    'no-undefined': 'error',

    // Disallow declaration of variables that are not used in the code
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    }],

    // Disallow use of variables before they are defined
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  },
};
