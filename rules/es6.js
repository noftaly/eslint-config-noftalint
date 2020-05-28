module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },

  rules: {
    // Enforces no braces where they can be omitted
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    // Require parens in arrow function arguments
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],

    // Require space before/after arrow function's arrow
    'arrow-spacing': ['error', { before: true, after: true }],

    // Verify super() callings in constructors
    'constructor-super': 'error',

    // Enforce the spacing around the * in generator functions
    'generator-star-spacing': ['error', { before: false, after: true }],

    // Disallow modifying variables of class declarations
    'no-class-assign': 'error',

    // Disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': ['error', { allowParens: true }],

    // Disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // Disallow duplicate class members
    'no-dupe-class-members': 'error',

    // Disallow importing from the same path more than once
    'no-duplicate-imports': 'off',

    // Disallow symbol constructor
    'no-new-symbol': 'error',

    // Disallow specific imports
    'no-restricted-imports': 'off',

    // Disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 'error',

    // Disallow useless computed property keys
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructor
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // Require let or const instead of var
    'no-var': 'error',

    // Require method and property shorthand syntax for object literals
    'object-shorthand': 'error',

    // Suggest using arrow functions as callbacks
    'prefer-arrow-callback': 'error',

    // Suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 'error',

    // Prefer destructuring from arrays and objects
    'prefer-destructuring': 'error',

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // Use rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // Suggest using the spread operator instead of .apply()
    'prefer-spread': 'error',

    // Suggest using template literals instead of string concatenation
    'prefer-template': 'off',

    // Disallow generator functions that do not have yield
    'require-yield': 'off',

    // Enforce spacing between object rest-spread
    'rest-spread-spacing': ['error', 'never'],

    // Import sorting
    'sort-imports': 'off',

    // Require a Symbol description
    'symbol-description': 'error',

    // Enforce usage of spacing in template strings
    'template-curly-spacing': 'off',

    // Enforce spacing around the * in yield* expressions
    'yield-star-spacing': ['error', 'after'],
  },
};
