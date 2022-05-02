module.exports = {
  rules: {
    // Enforce "for" loop update clause moving the counter in the right direction.
    'for-direction': 'error',

    // Enforces that a return statement is present in property getters
    'getter-return': 'error',

    // Disallow using an async function as a Promise executor
    'no-async-promise-executor': 'error',

    // Disallow await inside of loops
    'no-await-in-loop': 'warn',

    // Disallow comparing against -0
    'no-compare-neg-zero': 'error',

    // Disallow assignment operators in conditional statements
    'no-cond-assign': ['error', 'always'],

    // Disallow the use of console
    'no-console': 'off',

    // Disallows expressions where the operation doesn't affect the value
    'no-constant-binary-expression': 'error',

    // Disallow constant expressions in conditions
    'no-constant-condition': ['error', { checkLoops: false }],

    // Disallow control characters in regular expressions
    'no-control-regex': 'error',

    // Disallow the use of debugger
    'no-debugger': 'error',

    // Disallow duplicate arguments in function definitions
    'no-dupe-args': 'error',

    // Disallow duplicate conditions in if-else-if chains
    'no-dupe-else-if': 'error',

    // Disallow duplicate keys in object literals
    'no-dupe-keys': 'error',

    // Disallow a duplicate case label.
    'no-duplicate-case': 'error',

    // Disallow empty block statements
    'no-empty': 'error',

    // Disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // Disallow reassigning exceptions in catch clauses
    'no-ex-assign': 'error',

    // Disallow unnecessary boolean casts
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

    // Disallow reassigning function declarations
    'no-func-assign': 'error',

    // Disallow assigning to imported bindings
    'no-import-assign': 'error',

    // Disallow variable or function declarations in nested blocks
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in RegExp
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespace
    'no-irregular-whitespace': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': 'off',

    // Disallow calling global object properties as functions
    'no-obj-calls': 'error',

    // Disallow returning values from Promise executor functions
    'no-promise-executor-return': 'error',

    // Disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 'error',

    // Disallow multiple spaces in regular expression literals
    'no-regex-spaces': 'error',

    // Disallow specified names in exports
    'no-restricted-exports': ['error', { restrictedNamedExports: ['default', 'then'] }],

    // Disallow returning values from setters
    'no-setter-return': 'error',

    // Disallow sparse arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',

    // Disallow confusing multiline expressions
    'no-unexpected-multiline': 'error',

    // Disallow unreachable code after return, throw, continue, and break statements
    'no-unreachable': 'error',

    // Disallow loops with a body that allows only one iteration
    'no-unreachable-loop': 'error',

    // Disallow control flow statements in finally blocks
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',

    // Disallow use of optional chaining in contexts where the undefined value is not allowed
    'no-unsafe-optional-chaining': 'error',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    'require-atomic-updates': 'off',

    // Require or disallow strict mode directives
    // NOTE: Most projects nowadays use transpilers (TypeScript, Babel...) that will take care of tis for us.
    strict: ['error', 'never'],

    // Require calls to isNaN() when checking for NaN
    'use-isnan': 'error',

    // Enforce comparing typeof expressions against valid strings
    'valid-typeof': 'error',
  },
};
