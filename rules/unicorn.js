module.exports = {
  plugins: ['unicorn'],

  rules: {
    // Improve regexes by making them shorter, consistent, and safer
    'unicorn/better-regex': 'error',

    // Enforce a specific parameter name in catch clauses.
    'unicorn/catch-error-name': 'off',

    // Use destructured variables over properties
    'unicorn/consistent-destructuring': 'off',

    // Move function definitions to the highest possible scope.
    'unicorn/consistent-function-scoping': 'error',

    // Enforce correct Error subclassing.
    'unicorn/custom-error-definition': 'error',

    // Enforce no spaces between braces
    'unicorn/empty-brace-spaces': 'error',

    // Enforce passing a message value when throwing a built-in error.
    'unicorn/error-message': 'error',

    // Require escape sequences to use uppercase values.
    'unicorn/escape-case': 'error',

    // Add expiration conditions to TODO comments.
    'unicorn/expiring-todo-comments': 'off',

    // Enforce explicitly comparing the length property of a value.
    'unicorn/explicit-length-check': 'error',

    // Enforce a case style for filenames.
    // TODO: Enable. Choose between camelCase and hyphen-case.
    'unicorn/filename-case': 'off',

    // Enforce importing index files with ..
    'unicorn/import-index': 'off',

    // Enforce specific import styles per module.
    'unicorn/import-style': 'off',

    // Enforce the use of new for all builtins, except String, Number, Boolean, Symbol and BigInt.
    'unicorn/new-for-builtins': 'error',

    // Enforce specifying rules to disable in eslint-disable comments.
    'unicorn/no-abusive-eslint-disable': 'error',

    // Prevent passing a function reference directly to iterator methods.
    'unicorn/no-array-callback-reference': 'off',

    // Prefer for…of over Array#forEach(…)
    'unicorn/no-array-for-each': 'error',

    // Enforce combining multiple Array#push() into one call
    'unicorn/no-array-push-push': 'off',

    // Disallow Array#reduce() and Array#reduceRight()
    'unicorn/no-array-reduce': 'off',

    // Disallow using the this argument in array methods
    'unicorn/no-array-method-this-argument': 'error',

    // Do not use leading/trailing space between console.log parameters.
    'unicorn/no-console-spaces': 'warn',

    // Do not use document.cookie directly.
    'unicorn/no-document-cookie': 'error',

    // Do not use a for loop that can be replaced with a for-of loop.
    'unicorn/no-for-loop': 'error',

    // Enforce the use of Unicode escapes instead of hexadecimal escapes.
    'unicorn/no-hex-escape': 'error',

    // Require Array.isArray() instead of instanceof Array.
    'unicorn/no-instanceof-array': 'error',

    // Prevent calling EventTarget#removeEventListener() with the result of an expression
    'unicorn/no-invalid-remove-event-listener': 'error',

    // Disallow identifiers starting with new or class.
    'unicorn/no-keyword-prefix': 'off',

    // Disallow if statements as the only statement in if blocks without else
    'unicorn/no-lonely-if': 'error',

    // Disallow nested ternary expressions.
    // Already set in style.js with vanilla eslint
    'unicorn/no-nested-ternary': 'off',

    // Disallow new Array()
    'unicorn/no-new-array': 'error',

    // Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer().
    'unicorn/no-new-buffer': 'error',

    // Disallow the use of the null literal.
    'unicorn/no-null': 'off',

    // Disallow the use of objects as default parameters
    'unicorn/no-object-as-default-parameter': 'off',

    // Disallow process.exit().
    'unicorn/no-process-exit': 'off',

    // Forbid classes that only have static members
    'unicorn/no-static-only-class': 'error',

    // Disallow assigning this to a variable
    'unicorn/no-this-assignment': 'error',

    // Disallow unreadable array destructuring.
    'unicorn/no-unreadable-array-destructuring': 'warn',

    // Disallow unsafe regular expressions.
    'unicorn/no-unsafe-regex': 'off',

    // Disallow unused object properties.
    'unicorn/no-unused-properties': 'error',

    // Forbid useless fallback when spreading in object literals
    'unicorn/no-useless-fallback-in-spread': 'error',

    // Disallow useless array length check
    'unicorn/no-useless-length-check': 'error',

    // Disallow useless spread
    'unicorn/no-useless-spread': 'error',

    // Disallow useless undefined
    'unicorn/no-useless-undefined': 'error',

    // Disallow number literals with zero fractions or dangling dots.
    'unicorn/no-zero-fractions': 'error',

    // Enforce lowercase identifier and uppercase value for number literals.
    'unicorn/number-literal-case': 'error',

    // Enforce the style of numeric separators by correctly grouping digits.
    'unicorn/numeric-separators-style': 'error',

    // Prefer .addEventListener() and .removeEventListener() over on-functions.
    'unicorn/prefer-add-event-listener': 'error',

    // Prefer .find(…) over the first element from .filter(…)
    'unicorn/prefer-array-find': 'error',

    // Prefer Array#flat() over legacy techniques to flatten arrays
    'unicorn/prefer-array-flat': 'error',

    // Prefer .flatMap(…) over .map(…).flat().
    'unicorn/prefer-array-flat-map': 'error',

    // Prefer Array#indexOf() over Array#findIndex() when looking for the index of an item
    'unicorn/prefer-array-index-of': 'error',

    // Prefer .some(…) over .find(…).
    'unicorn/prefer-array-some': 'error',

    // Prefer .at() method for index access and String#charAt()
    // TODO(node>=18): Enable.
    'unicorn/prefer-at': 'off',

    // Prefer Date.now() to get the number of milliseconds since the Unix Epoch
    'unicorn/prefer-date-now': 'error',

    // Prefer default parameters over reassignment
    'unicorn/prefer-default-parameters': 'error',

    // Prefer Node#append() over Node#appendChild().
    'unicorn/prefer-dom-node-append': 'error',

    // Prefer node.remove() over parentNode.removeChild(node) and parentElement.removeChild(node).
    'unicorn/prefer-dom-node-remove': 'error',

    // Prefer .textContent over .innerText.
    'unicorn/prefer-dom-node-text-content': 'error',

    // Prefer using .dataset on DOM elements over .setAttribute(…).
    'unicorn/prefer-dom-node-dataset': 'error',

    // Prefer .includes() over .indexOf() when checking for existence or non-existence.
    'unicorn/prefer-includes': 'error',

    // Prefer KeyboardEvent#key over KeyboardEvent#keyCode.
    'unicorn/prefer-keyboard-event-key': 'error',

    // Enforce the use of Math.trunc instead of bitwise operators
    'unicorn/prefer-math-trunc': 'error',

    // Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(),
    // .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement().
    'unicorn/prefer-modern-dom-apis': 'error',

    // Prefer JavaScript modules (ESM) over CommonJS
    'unicorn/prefer-module': 'off',

    // Prefer negative index over .length, index for {String,Array,TypedArray}#slice() and Array#splice().
    'unicorn/prefer-negative-index': 'error',

    // Prefer using the node: protocol when importing Node.js builtin modules.
    'unicorn/prefer-node-protocol': 'error',

    // Prefer Number static properties over global ones. (Number.parseInt() over parseInt() etc.)
    'unicorn/prefer-number-properties': 'error',

    // Prefer using Object.fromEntries(…) to transform a list of key-value pairs into an object
    'unicorn/prefer-object-from-entries': 'error',

    // Prefer Object.hasOwn(…) over Object.prototype.hasOwnProperty.call(…)
    'unicorn/prefer-object-has-own': 'error',

    // Prefer omitting the catch binding parameter
    'unicorn/prefer-optional-catch-binding': 'error',

    // Prefer borrowing methods from the prototype instead of methods from an instance
    'unicorn/prefer-prototype-methods': 'error',

    // Prefer .querySelector() over .getElementById(), .querySelectorAll() over .getElementsByClassName()
    // and .getElementsByTagName().
    'unicorn/prefer-query-selector': 'error',

    // Prefer Reflect.apply() over Function#apply().
    'unicorn/prefer-reflect-apply': 'error',

    // Prefer RegExp#test() over String#match() and RegExp#exec()
    'unicorn/prefer-regexp-test': 'error',

    // Prefer Set#has() over Array#includes() when checking for existence or non-existence
    'unicorn/prefer-set-has': 'error',

    // Prefer the spread operator over Array.from().
    'unicorn/prefer-spread': 'error',

    // Prefer String#replaceAll() over regex searches with the global flag
    'unicorn/prefer-string-replace-all': 'error',

    // Prefer String#slice() over String#substr() and String#substring().
    'unicorn/prefer-string-slice': 'error',

    // Prefer String#startsWith() & String#endsWith() over more complex alternatives.
    'unicorn/prefer-string-starts-ends-with': 'error',

    // Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight().
    'unicorn/prefer-string-trim-start-end': 'error',

    // Prefer switch over multiple else-if.
    'unicorn/prefer-switch': ['error', { emptyDefaultCase: 'no-default-case' }],

    // Prefer ternary expressions over simple if-else statements
    'unicorn/prefer-ternary': ['error', 'only-single-line'],

    // Prefer top-level await over top-level promises and async function calls
    // TODO(node>=16): Enable?
    'unicorn/prefer-top-level-await': 'off',

    // Enforce throwing TypeError in type checking conditions.
    'unicorn/prefer-type-error': 'error',

    // Prevent abbreviations.
    'unicorn/prevent-abbreviations': 'off',

    // Enforce using the separator argument with Array#join()
    'unicorn/require-array-join-separator': 'error',

    // Enforce using the digits argument with Number#toFixed()
    'unicorn/require-number-to-fixed-digits-argument': 'error',

    // Enforce using the targetOrigin argument with window.postMessage()
    'unicorn/require-post-message-target-origin': 'error',

    // Enforce better string content (replace "\'" by "’")
    'unicorn/string-content': 'off',

    // Fix whitespace-insensitive template indentation
    'unicorn/template-indent': ['error', {
      tags: [
        'outdent',
        'dedent',
        'gql',
        'sql',
        'html',
        'styled',
      ],
      functions: ['dedent', 'stripIndent'],
      selectors: [],
      comments: ['HTML', 'indent'],
    }],

    // Require new when throwing an error.
    'unicorn/throw-new-error': 'error',
  },
};
