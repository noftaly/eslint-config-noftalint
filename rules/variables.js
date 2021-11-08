module.exports = {
  rules: {
    // Disallow specified identifiers
    'id-denylist': 'off',

    // Require or disallow initialization in variable declarations
    'init-declarations': 'off',

    // Disallow deleting variables
    'no-delete-var': 'error',

    // Disallow Labels That Are Variables Names
    'no-label-var': 'error',

    // Disallow specific global variables
    'no-restricted-globals': 'off',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': ['error', {
      builtinGlobals: false,
      hoist: 'functions',
      allow: [],
    }],

    // Disallow Shadowing of Restricted Names
    'no-shadow-restricted-names': 'error',

    // Disallow Undeclared Variables
    'no-undef': 'error',

    // Disallow Initializing to undefined
    'no-undef-init': 'error',

    // Disallow Use of undefined Variable
    'no-undefined': 'error',

    // Disallow Unused Variables
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    }],

    // Disallow Early Use
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  },
};
