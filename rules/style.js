module.exports = {
  rules: {
    // Enforce line breaks after opening and before closing array brackets
    'array-bracket-newline': ['error', 'consistent'],

    // Enforce line breaks between array elements
    // TODO: Change?
    'array-element-newline': ['off', { multiline: true, minItems: 4 }],

    // Enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // Enforce spacing inside single-line blocks
    'block-spacing': 'error',

    // Enforce one true brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // Require camel case names
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': ['warn', 'always', {
      ignoreConsecutiveComments: true,
      // Ignore urls :
      ignorePattern: '[\w#%+.:=@~-]{1,256}\.[\d()A-Za-z]{1,6}\b([\w#%&()+./:=?@~-]*)', // eslint-disable-line no-useless-escape
    }],

    // Require trailing commas in multiline object literals
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // Enforce spacing before and after comma
    'comma-spacing': ['error', { before: false, after: true }],

    // Enforce one true comma style
    'comma-style': 'error',

    // Disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],

    // Enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // Enforce newline at the end of file, with no multiple empty lines
    'eol-last': 'error',

    // Enforce line breaks between arguments of a function call
    'function-call-argument-newline': 'off',

    // Enforce spacing between functions and their invocations
    'func-call-spacing': 'error',

    // Requires function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'off',

    // Require function expressions to have a name
    'func-names': 'off',

    // Enforces use of function declarations or expressions
    'func-style': 'off',

    // Enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['error', 'consistent'],

    // This option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 'off',

    // Require identifiers to match the provided regular expression
    'id-match': 'off',

    // Enforce the location of arrow function bodies with implicit returns
    'implicit-arrow-linebreak': 'off',

    // This option sets a specific tab width for your code
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // List derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false,
    }],

    // Specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': 'off',

    // Enforces spacing between keys and values in object literal properties
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // Require a space before & after certain keywords
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],

    // Enforce position of line comments
    'line-comment-position': 'off',

    // Disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': ['error', 'unix'],

    // Require or disallow an empty line between class members
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: false,
    }],

    // Enforces empty lines around comments
    'lines-around-comment': 'off',

    // Specify the maximum depth that blocks can be nested
    'max-depth': 'off',

    // Specify the maximum length of a line in your program
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // Specify the max number of lines in a file
    'max-lines': ['warn', {
      max: 500,
      skipBlankLines: true,
      skipComments: true,
    }],

    // Enforce a maximum function length
    'max-lines-per-function': 'off',

    // Specify the maximum depth callbacks can be nested
    'max-nested-callbacks': ['error', 3],

    // Limits the number of parameters that can be used in the function declaration.
    'max-params': ['warn', 5],

    // Specify the maximum number of statement allowed in a function
    'max-statements': 'off',

    // Restrict the number of statements per line
    'max-statements-per-line': 'error',

    // Enforce a particular style for multiline comments
    'multiline-comment-style': 'off',

    // Require multiline ternary
    'multiline-ternary': 'off',

    // Require a capital letter for constructors
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // Disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // Enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // Disallow use of the Array constructor
    'no-array-constructor': 'error',

    // Disallow use of bitwise operators
    'no-bitwise': 'off',

    // Disallow use of the continue statement
    'no-continue': 'off',

    // Disallow comments inline after code
    'no-inline-comments': 'off',

    // Disallow if as the only statement in an else block
    'no-lonely-if': 'error',

    // Disallow un-paren'd mixes of different operators
    'no-mixed-operators': ['error', {
      // The list of arthmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    }],

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // Disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 0 }],

    // Disallow negated conditions
    'no-negated-condition': 'error',

    // Disallow nested ternary expressions
    'no-nested-ternary': 'off',

    // Disallow use of the Object constructor
    'no-new-object': 'error',

    // Disallow use of unary operators, ++ and --
    'no-plusplus': 'off',

    // Disallow certain syntax forms
    'no-restricted-syntax': 'off',

    // Disallow tab characters entirely
    'no-tabs': 'error',

    // Disallow the use of ternary operators
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',

    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',

    // Disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // Enforce the location of single-line statements
    'nonblock-statement-body-position': ['error', 'below'],

    // Require padding inside curly braces
    'object-curly-spacing': ['error', 'always'],

    // Enforce line breaks between braces
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],

    // Enforce "same line" or "multiple line" on object properties.
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    // Allow just one var statement per function
    'one-var': ['error', 'never'],

    // Require a newline around variable declaration
    'one-var-declaration-per-line': 'off',

    // Require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 'error',

    // Requires operator at the beginning of the line in multiline statements
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // Disallow padding within blocks
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    }],

    // Require or disallow padding lines between statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },

      { blankLine: 'always', prev: 'export', next: '*' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'any', prev: 'export', next: 'export' },

      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'always', prev: '*', next: 'import' },
      { blankLine: 'any', prev: 'import', next: 'import' },
    ],

    // Disallow the use of Math.pow in favor of the ** operator
    'prefer-exponentiation-operator': 'error',

    // Prefer use of an object spread over Object.assign
    'prefer-object-spread': 'error',

    // Require quotes around object literal property names
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // Specify whether double or single quotes should be used
    quotes: ['error', 'single', { avoidEscape: true }],

    // Require or disallow use of semicolons instead of ASI
    semi: ['error', 'always'],

    // Enforce spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],

    // Enforce location of semicolons
    'semi-style': ['error', 'last'],

    // Requires object keys to be sorted
    'sort-keys': 'off',

    // Sort variables within the same declaration block
    'sort-vars': 'off',

    // Require or disallow space before blocks
    'space-before-blocks': 'error',

    // Require or disallow space before function opening parenthesis
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // Require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],

    // Require spaces around operators
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    'space-unary-ops': 'error',

    // Require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // Space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'], // Space here to support sprockets directives and flow comment types
        balanced: true,
      },
    }],

    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    'template-tag-spacing': ['error', 'never'],

    // Require or disallow the Unicode Byte Order Mark
    'unicode-bom': ['error', 'never'],

    // Require regex literals to be wrapped in parentheses
    'wrap-regex': 'off',
  },
};
