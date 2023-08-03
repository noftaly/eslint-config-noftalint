const bestPractices = require('./best-practices').rules;
const errors = require('./errors').rules;
const es6 = require('./es6').rules;
const style = require('./style').rules;
const variables = require('./variables').rules;


function buildOptionsFromOriginal(rule, newOptions) {
  if (!Array.isArray(rule))
    rule = [rule, {}];
  const hasStringOption = rule.length === 3;
  const configuration = [rule[0]];

  if (hasStringOption)
    configuration.push(rule[1]);

  configuration.push({
    ...rule[hasStringOption ? 2 : 1],
    ...newOptions,
  });
  return configuration;
}

module.exports = {
  rules: {
    // Disable these one as TypeScript already take care of it
    'getter-return': 'off',

    // Enforce named tuples
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSTupleType > :not(TSNamedTupleMember)',
        message: 'All tuples should have labels',
      },
    ],

    // Disallow or enforce spaces inside of blocks after opening block and before closing block.
    'block-spacing': 'off',
    '@typescript-eslint/block-spacing': style['block-spacing'],

    // Enforce consistent brace style for blocks
    'brace-style': 'off',
    '@typescript-eslint/brace-style': style['brace-style'],

    // Enforce that class methods use "this"
    'class-methods-use-this': 'off',
    '@typescript-eslint/class-methods-use-this': bestPractices['class-methods-use-this'],

    // Require or disallow trailing comma
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': buildOptionsFromOriginal(
      style['comma-dangle'],
      {
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      },
    ),

    // Enforces consistent spacing before and after commas
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': style['comma-spacing'],

    // Enforce default parameters to be last
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': bestPractices['default-param-last'],

    // Enforce dot notation whenever possible
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': buildOptionsFromOriginal(
      bestPractices['dot-notation'],
      {
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
      },
    ),

    // Require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': style['func-call-spacing'],

    // Enforce consistent indentation
    // Off because of #1824 (https://github.com/typescript-eslint/typescript-eslint/issues/1824)
    indent: 'off',
    '@typescript-eslint/indent': 'off',

    // Require or disallow initialization in variable declarations
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': variables['init-declarations'],

    'key-spacing': 'off',
    '@typescript-eslint/key-spacing': style['key-spacing'],

    // Enforce consistent spacing before and after keywords
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': style['keyword-spacing'],

    // Require empty lines around comments.
    'lines-around-comment': 'off',
    '@typescript-eslint/lines-around-comment': style['lines-around-comment'],

    // Require or disallow an empty line between class members
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': buildOptionsFromOriginal(
      style['lines-between-class-members'],
      {
        exceptAfterSingleLine: true,
        exceptAfterOverload: true,
      },
    ),

    // Disallow generic Array constructors
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': style['no-array-constructor'],

    // Disallow duplicate class members
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': es6['no-dupe-class-members'],

    // Disallow empty functions
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': buildOptionsFromOriginal(
      bestPractices['no-empty-function'],
      { allow: ['decoratedFunctions'] },
    ),

    // Disallow unnecessary parentheses
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': errors['no-extra-parens'],

    // Disallow unnecessary semicolons
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': errors['no-extra-semi'],

    // Disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': bestPractices['no-invalid-this'],

    // Disallow function declarations that contain unsafe references inside loop statements
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': bestPractices['no-loop-func'],

    // Disallow literal numbers that lose precision
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': bestPractices['no-loss-of-precision'],

    // Disallow magic numbers
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': bestPractices['no-magic-numbers'],

    // Disallow variable redeclaration
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': buildOptionsFromOriginal(
      bestPractices['no-redeclare'],
      { ignoreDeclarationMerge: false },
    ),

    // Disallow specified modules when loaded by import
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': es6['no-restricted-imports'],

    // Disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': buildOptionsFromOriginal(
      variables['no-shadow'],
      {
        ignoreTypeValueShadow: false,
        ignoreFunctionTypeParameterNameValueShadow: false,
      },
    ),

    // Disallow unused expressions
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': bestPractices['no-unused-expressions'],

    // Disallow unused variables
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': variables['no-unused-vars'],

    // Disallow the use of variables before they are defined
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': buildOptionsFromOriginal(
      variables['no-use-before-define'],
      {
        enums: true,
        typedefs: true,
        ignoreTypeReferences: true,
      },
    ),

    // Disallow unnecessary constructors
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': es6['no-useless-constructor'],

    // Enforce consistent spacing inside braces
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': style['object-curly-spacing'],

    // Require or disallow padding lines between statements
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': style['padding-line-between-statements'],

    // Enforce the consistent use of either backticks, double, or single quotes
    quotes: 'off',
    '@typescript-eslint/quotes': style.quotes,

    // Disallow async functions which have no await expression
    'require-await': 'off',
    '@typescript-eslint/require-await': bestPractices['require-await'],

    // Enforces consistent returning of awaited values
    'no-return-await': 'off',
    '@typescript-eslint/return-await': bestPractices['no-return-await'],

    // Require or disallow semicolons instead of ASI
    semi: 'off',
    '@typescript-eslint/semi': style.semi,

    // Enforces consistent spacing before blocks.
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': style['space-before-blocks'],

    // Enforces consistent spacing before function parenthesis
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': style['space-before-function-paren'],

    // This rule is aimed at ensuring there are spaces around infix operators.
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': style['space-infix-ops'],
  },
};
