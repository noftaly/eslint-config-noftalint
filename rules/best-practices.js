module.exports = {
  rules: {
    // Enforces getter/setter pairs in objects
    'accessor-pairs': 'off',

    // Enforces return statements in callbacks of array's methods
    'array-callback-return': ['error', { allowImplicit: true }],

    // Treat var statements as if they were block scoped
    'block-scoped-var': 'error',

    // Specify the maximum cyclomatic complexity allowed in a program
    complexity: ['error', 25],

    // Enforce that class methods use "this"
    'class-methods-use-this': 'off',

    // Require return statements to either always or never specify values
    'consistent-return': 'off',

    // Specify curly brace conventions for all control statements
    curly: ['error', 'multi-or-nest', 'consistent'],

    // Require default case in switch statements
    'default-case': 'off',

    // Enforce default clauses in switch statements to be last
    'default-case-last': 'error',

    // Putting default parameter at last allows function calls to omit optional tail arguments.
    'default-param-last': 'error',

    // Encourages use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // Enforces consistent newlines before or after dots
    'dot-location': ['error', 'property'],

    // Require the use of === and !==
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // Require grouped accessor pairs in object literals and classes
    'grouped-accessor-pairs': 'error',

    // Make sure for-in loops have an if statement
    'guard-for-in': 'error',

    // Enforce a maximum number of classes per file
    'max-classes-per-file': ['error', 1],

    // Disallow the use of alert, confirm, and prompt
    'no-alert': 'off',

    // Disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // Disallow lexical declarations in case/default clauses
    'no-case-declarations': 'error',

    // Disallow returning value in constructor
    'no-constructor-return': 'error',

    // Disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'off',

    // Disallow else after a return in an if
    'no-else-return': ['error', { allowElseIf: true }],

    // Disallow empty functions, except for arrow functions
    'no-empty-function': ['error', { allow: ['arrowFunctions'] }],

    // Disallow empty destructuring patterns
    'no-empty-pattern': 'error',

    // Disallow empty static blocks
    'no-empty-static-block': 'error',

    // Disallow comparisons to null without a type-checking operator
    'no-eq-null': 'off',

    // Disallow use of eval()
    'no-eval': 'error',

    // Disallow adding to native types
    'no-extend-native': 'error',

    // Disallow unnecessary function binding
    'no-extra-bind': 'error',

    // Disallow Unnecessary Labels
    'no-extra-label': 'error',

    // Disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // Disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // Disallow reassignments of native objects or read-only globals
    'no-global-assign': 'error',

    // Disallow implicit type conversions
    'no-implicit-coercion': 'error',

    // Disallow var and named functions in global scope
    'no-implicit-globals': 'off',

    // Disallow use of eval()-like methods
    'no-implied-eval': 'error',

    // Disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',

    // Disallow usage of __iterator__ property
    'no-iterator': 'error',

    // Disallow use of labels for anything other than loops and switches
    'no-labels': 'error',

    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // Disallow creation of functions within loops
    'no-loop-func': 'off',

    // Disallow number literals that lose precision
    'no-loss-of-precision': 'warn',

    // Disallow magic numbers
    'no-magic-numbers': 'off',

    // Disallow use of multiple spaces
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],

    // Disallow use of multiline strings
    'no-multi-str': 'error',

    // Disallow use of new operator when not part of the assignment or comparison
    'no-new': 'off',

    // Disallow use of new operator for Function object
    'no-new-func': 'error',

    // Disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'error',

    // Disallow `\8` and `\9` escape sequences in string literals
    'no-nonoctal-decimal-escape': 'error',

    // Disallow use of (old style) octal literals
    'no-octal': 'error',

    // Disallow use of octal escape sequences in string literals, such as
    'no-octal-escape': 'error',

    // Disallow reassignment of function parameters
    'no-param-reassign': 'off',

    // Disallow usage of __proto__ property
    'no-proto': 'error',

    // Disallow declaring the same variable more then once
    'no-redeclare': 'error',

    // Disallow certain object properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated.',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead.',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead.',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead.',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead.',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead.',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead.',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],

    // Disallow use of assignment in return statement
    'no-return-assign': ['error', 'always'],

    // Disallow redundant `return await`
    'no-return-await': 'off',

    // Disallow use of `javascript:` urls.
    'no-script-url': 'error',

    // Disallow self assignment
    'no-self-assign': 'error',

    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // Disallow use of comma operator
    'no-sequences': 'error',

    // Restrict what can be thrown as an exception
    'no-throw-literal': 'error',

    // Disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 'off',

    // Disallow usage of expressions in statement position
    'no-unused-expressions': ['error', { allowTernary: true }],

    // Disallow unused labels
    'no-unused-labels': 'error',

    // Disallow Unused Private Class Members
    'no-unused-private-class-members': 'error',

    // Disallow useless backreferences in regular expressions
    'no-useless-backreference': 'off',

    // Disallow unnecessary .call() and .apply()
    'no-useless-call': 'error',

    // Disallow unnecessary catch clauses
    'no-useless-catch': 'error',

    // Disallow useless string concatenation
    'no-useless-concat': 'error',

    // Disallow unnecessary string escaping
    'no-useless-escape': 'error',

    // Disallow redundant return; keywords
    'no-useless-return': 'error',

    // Disallow use of void operator
    'no-void': 'off',

    // Disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': 'off',

    // Disallow use of the with statement
    'no-with': 'error',

    // Require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 'off',

    // Suggest using named capture group in regular expression
    'prefer-named-capture-group': 'error',

    // Disallow use of the RegExp constructor in favor of regular expression literals
    'prefer-regex-literals': 'error',

    // Require use of the second argument for parseInt()
    radix: 'error',

    // Require `await` in `async function`
    'require-await': 'error',

    // Enforce the use of u flag on RegExp
    'require-unicode-regexp': 'off',

    // Requires to declare all vars on top of their containing scope
    'vars-on-top': 'error',

    // Require immediate function invocation to be wrapped in parentheses
    'wrap-iife': 'error',

    // Require or disallow Yoda conditions
    yoda: 'error',
  },
};
