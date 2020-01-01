module.exports = {
  plugins: ['unicorn'],

  rules: {
    // Enforce a specific parameter name in catch clauses.
    'unicorn/catch-error-name': 'off',

    // Move function definitions to the highest possible scope.
    'unicorn/consistent-function-scoping': 'error',

    // Enforce correct Error subclassing.
    'unicorn/custom-error-definition': 'off',

    // Enforce passing a message value when throwing a built-in error.
    'unicorn/error-message': 'error',

    // Require escape sequences to use uppercase values.
    'unicorn/escape-case': 'error',

    // Add expiration conditions to TODO comments.
    'unicorn/expiring-todo-comments': 'off',

    // Enforce explicitly comparing the length property of a value.
    'unicorn/explicit-length-check': 'error',

    // Enforce a case style for filenames.
    'unicorn/filename-case': 'off',

    // Enforce importing index files with ..
    'unicorn/import-index': 'off',

    // Enforce the use of new for all builtins, except String, Number, Boolean, Symbol and BigInt.
    'unicorn/new-for-builtins': 'error',

    // Enforce specifying rules to disable in eslint-disable comments.
    'unicorn/no-abusive-eslint-disable': 'error',

    // Require Array.isArray() instead of instanceof Array.
    'unicorn/no-array-instanceof': 'error',

    // Do not use leading/trailing space between console.log parameters.
    'unicorn/no-console-spaces': 'warn',

    // Prevent passing a function reference directly to iterator methods.
    'unicorn/no-fn-reference-in-iterator': 'off',

    // Do not use a for loop that can be replaced with a for-of loop.
    'unicorn/no-for-loop': 'error',

    // Enforce the use of Unicode escapes instead of hexadecimal escapes.
    'unicorn/no-hex-escape': 'error',

    // Disallow identifiers starting with new or class.
    'unicorn/no-keyword-prefix': 'off',

    // Disallow nested ternary expressions.
    // Already set in style.js with vanilla eslint
    'unicorn/no-nested-ternary': 'off',

    // Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer().
    'unicorn/no-new-buffer': 'error',

    // Disallow process.exit().
    'unicorn/no-process-exit': 'off',

    // Disallow unreadable array destructuring.
    'unicorn/no-unreadable-array-destructuring': 'warn',

    // Disallow unsafe regular expressions.
    'unicorn/no-unsafe-regex': 'warn',

    // Disallow unused object properties.
    'unicorn/no-unused-properties': 'off',

    // Disallow number literals with zero fractions or dangling dots.
    'unicorn/no-zero-fractions': 'error',

    // Enforce lowercase identifier and uppercase value for number literals.
    'unicorn/number-literal-case': 'error',

    // Prefer .addEventListener() and .removeEventListener() over on-functions.
    'unicorn/prefer-add-event-listener': 'error',

    // Prefer using .dataset on DOM elements over .setAttribute(…).
    'unicorn/prefer-dataset': 'error',

    // Prefer KeyboardEvent#key over KeyboardEvent#keyCode.
    'unicorn/prefer-event-key': 'error',

    // Prefer the exponentiation operator over Math.pow()
    // Already set in style.js with vanilla eslint
    'unicorn/prefer-exponentiation-operator': 'off',

    // Prefer .flatMap(…) over .map(…).flat().
    'unicorn/prefer-flat-map': 'error',

    // Prefer .includes() over .indexOf() when checking for existence or non-existence.
    'unicorn/prefer-includes': 'error',

    // Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(),
    // .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement().
    'unicorn/prefer-modern-dom-apis': 'error',

    // Prefer negative index over .length, index for {String,Array,TypedArray}#slice() and Array#splice().
    'unicorn/prefer-negative-index': 'error',

    // Prefer Node#append() over Node#appendChild().
    'unicorn/prefer-node-append': 'error',

    // Prefer node.remove() over parentNode.removeChild(node) and parentElement.removeChild(node).
    'unicorn/prefer-node-remove': 'error',

    // Prefer .querySelector() over .getElementById(), .querySelectorAll() over .getElementsByClassName()
    // and .getElementsByTagName().
    // TODO: enable?
    'unicorn/prefer-query-selector': 'off',

    // Prefer Reflect.apply() over Function#apply().
    'unicorn/prefer-reflect-apply': 'error',

    // Prefer the spread operator over Array.from().
    'unicorn/prefer-spread': 'error',

    // Prefer String#startsWith() & String#endsWith() over more complex alternatives.
    'unicorn/prefer-starts-ends-with': 'error',

    // Prefer String#slice() over String#substr() and String#substring().
    'unicorn/prefer-string-slice': 'error',

    // Prefer .textContent over .innerText.
    'unicorn/prefer-text-content': 'error',

    // Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight().
    'unicorn/prefer-trim-start-end': 'error',

    // Enforce throwing TypeError in type checking conditions.
    'unicorn/prefer-type-error': 'error',

    // Prevent abbreviations.
    // TODO: enable? (and add options)
    'unicorn/prevent-abbreviations': 'off',

    // Enforce the use of regex shorthands to improve readability.
    'unicorn/regex-shorthand': 'warn',

    // Require new when throwing an error.
    'unicorn/throw-new-error': 'error',
  },
};
