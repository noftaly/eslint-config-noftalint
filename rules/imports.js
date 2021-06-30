module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['import'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },

  rules: {
    // Ensure default import coupled with default export
    'import/default': 'off',

    // Dynamic imports require a leading comment with a webpackChunkName
    'import/dynamic-import-chunkname': 'off',

    // Disallow invalid exports, e.g. multiple defaults
    'import/export': 'error',

    // This rule enforces that all exports are declared at the bottom of the file.
    'import/exports-last': 'off',

    // Ensure consistent use of file extension within the import path
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    }],

    // Disallow non-import statements appearing before import statements
    'import/first': 'error',

    // Reports when named exports are not grouped together in a single export declaration or when multiple
    // assignments to CommonJS module.exports or exports object are present in a single file.
    'import/group-exports': 'off',

    // Forbid modules to have too many dependencies
    'import/max-dependencies': 'off',

    // Ensure named imports coupled with named exports
    'import/named': 'error',

    // Enforces names exist at the time they are dereferenced, when imported as a full namespace
    'import/namespace': 'off',

    // Require a newline after the last import/require in a group
    'import/newline-after-import': 'error',

    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',

    // Disallow AMD require/define
    'import/no-amd': 'error',

    // Reports if a module's default export is unnamed
    'import/no-anonymous-default-export': 'off',

    // Disallow require()
    'import/no-commonjs': 'warn',

    // Forbid cyclical dependencies between modules
    'import/no-cycle': 'error',

    // Forbid default exports
    'import/no-default-export': 'off',

    // Disallow use of jsdoc-marked-deprecated imports
    'import/no-deprecated': 'warn',

    // Disallow duplicate imports
    'import/no-duplicates': 'error',

    // Forbid require() calls with expressions
    'import/no-dynamic-require': 'off',

    // Forbid the use of extraneous packages
    // Paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**', // Tape, common npm pattern
        'tests/**', // Also common npm pattern
        'spec/**', // Mocha, rspec-like pattern
        '**/__tests__/**', // Jest pattern
        '**/__mocks__/**', // Jest pattern
        'test.{js,jsx}', // Repos with a single test file
        'test-*.{js,jsx}', // Repos with multiple top-level test files
        '**/*{.,_}{test,spec}.{js,jsx}', // Tests where the extension or filename suffix denotes that it is a test
        '**/jest.config.js', // Jest config
        '**/jest.setup.js', // Jest setup
        '**/vue.config.js', // Vue-cli config
        '**/webpack.config.js', // Webpack config
        '**/webpack.config.*.js', // Webpack config
        '**/rollup.config.js', // Rollup config
        '**/rollup.config.*.js', // Rollup config
        '**/gulpfile.js', // Gulp config
        '**/gulpfile.*.js', // Gulp config
        '**/Gruntfile{,.js}', // Grunt config
        '**/protractor.conf.js', // Protractor config
        '**/protractor.conf.*.js', // Protractor config
        '**/karma.conf.js', // Karma config
      ],
      optionalDependencies: false,
    }],

    // Prevent importing the submodules of other modules
    'import/no-internal-modules': 'off',

    // Reports the use of import declarations with CommonJS exports in any module except for the main module.
    'import/no-import-module-exports': 'error',

    // Forbid mutable exports
    'import/no-mutable-exports': 'error',

    // Warn on accessing default export property names that are also named exports
    'import/no-named-as-default-member': 'error',

    // Do not allow a default import name to match a named export
    'import/no-named-as-default': 'error',

    // Prevent importing the default as if it were named
    'import/no-named-default': 'error',

    // Prohibit named exports
    'import/no-named-export': 'off',

    // Disallow namespace imports
    'import/no-namespace': 'off',

    // No Node.js builtin modules
    'import/no-nodejs-modules': 'off',

    // Use this rule to prevent importing packages through relative paths.
    'import/no-relative-packages': 'off',

    // Use this rule to prevent imports to folders in relative parent paths.
    'import/no-relative-parent-imports': 'off',

    // Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'off',

    // Forbid a module from importing itself
    'import/no-self-import': 'error',

    // Prevent unassigned imports
    // importing for side effects is perfectly acceptable, if you need side effects.
    'import/no-unassigned-import': 'off',

    // Ensure imports point to files/modules that can be resolved
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // Reports modules without any exports, or with unused exports
    'import/no-unused-modules': 'off',

    // Ensures that there are no useless path segments
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // Forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',

    // Ensure absolute imports are above relative imports and that unassigned imports are ignored
    'import/order': ['error', {
      // TODO(eslint-plugin-import>=23): un-comment
      // groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      alphabetize: {
        order: 'asc',
      },
    }],

    // Require modules with a single export to use a default export
    'import/prefer-default-export': 'warn',

    // Warn if a module could be mistakenly parsed as a script by a consumer leveraging Unambiguous JavaScript Grammar.
    // This should not be enabled until this proposal has at least been *presented* to TC39.
    // At the moment, it's not a thing.
    'import/unambiguous': 'off',
  },
};
