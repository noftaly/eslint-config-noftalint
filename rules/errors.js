module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    'for-direction': 'off',

    // Enforces that a return statement is present in property getters
    'getter-return': 'error',

    // Disallow using an async function as a Promise executor
    'no-async-promise-executor': 'off',

    // Disallow await inside of loops
    'no-await-in-loop': 'error',

    // Disallow comparisons to negative zero
    'no-compare-neg-zero': 'off',

    // Disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'always'],

    // Disallow use of console
    'no-console': 'off',

    // Disallow use of constant expressions in conditions
    'no-constant-condition': 'warn',

    // Disallow control characters in regular expressions
    'no-control-regex': 'error',

    // Disallow use of debugger
    'no-debugger': 'error',

    // Disallow duplicate arguments in functions
    'no-dupe-args': 'error',

    // Disallow duplicate conditions in if-else-if chains
    'no-dupe-else-if': 'error',

    // Disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',

    // Disallow a duplicate case label.
    'no-duplicate-case': 'error',

    // Disallow empty statements
    'no-empty': 'error',

    // Disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // Disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',

    // Disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 'error',

    // Disallow unnecessary parentheses
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // Delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }],

    // Disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // Disallow overwriting functions written as function declarations
    'no-func-assign': 'error',

    // Disallow assigning to imported bindings
    'no-import-assign': 'off',

    // Disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': 'off',

    // Disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',

    // Disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 'error',

    // Disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',

    // Disallow specified names in exports
    'no-restricted-exports': ['error', { restrictedNamedExports: ['default', 'then'] } ],

    // Disallow returning values from setters
    'no-setter-return': 'error',

    // Disallow sparse arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',

    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 'error',

    // Disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'error',

    // Disallow return/throw/break/continue inside finally blocks
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    'require-atomic-updates': 'off',

    // Disallow comparisons with the value NaN
    'use-isnan': 'error',

    // Ensure JSDoc comments are valid
    'valid-jsdoc': 'warn',

    // Ensure that the results of typeof are compared against a valid string
    'valid-typeof': 'error',
  },
};
