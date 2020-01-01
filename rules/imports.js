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
    // Ensure imports point to files/modules that can be resolved
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // Ensure named imports coupled with named exports
    'import/named': 'error',

    // Ensure default import coupled with default export
    'import/default': 'off',

    // Enforces names exist at the time they are dereferenced, when imported as a full namespace
    'import/namespace': 'off',

    // Disallow invalid exports, e.g. multiple defaults
    'import/export': 'error',

    // Do not allow a default import name to match a named export
    'import/no-named-as-default': 'error',

    // Warn on accessing default export property names that are also named exports
    'import/no-named-as-default-member': 'error',

    // Disallow use of jsdoc-marked-deprecated imports
    'import/no-deprecated': 'warning',

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

    // Forbid mutable exports
    'import/no-mutable-exports': 'error',

    // Disallow require()
    'import/no-commonjs': 'warning',

    // Disallow AMD require/define
    'import/no-amd': 'error',

    // No Node.js builtin modules
    'import/no-nodejs-modules': 'off',

    // Disallow non-import statements appearing before import statements
    'import/first': 'error',

    // Disallow duplicate imports
    'import/no-duplicates': 'error',

    // Disallow namespace imports
    'import/no-namespace': 'off',

    // Ensure consistent use of file extension within the import path
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    }],

    // Ensure absolute imports are above relative imports and that unassigned imports are ignored
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    }],

    // Require a newline after the last import/require in a group
    'import/newline-after-import': 'error',

    // Require modules with a single export to use a default export
    'import/prefer-default-export': 'warning',

    // Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'off',

    // Forbid modules to have too many dependencies
    'import/max-dependencies': 'off',

    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',

    // Forbid require() calls with expressions
    'import/no-dynamic-require': 'off',

    // Prevent importing the submodules of other modules
    'import/no-internal-modules': 'off',

    // Warn if a module could be mistakenly parsed as a script by a consumer leveraging Unambiguous JavaScript Grammar.
    // This should not be enabled until this proposal has at least been *presented* to TC39.
    // At the moment, it's not a thing.
    'import/unambiguous': 'off',

    // Forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',

    // Prevent unassigned imports
    // importing for side effects is perfectly acceptable, if you need side effects.
    'import/no-unassigned-import': 'off',

    // Prevent importing the default as if it were named
    'import/no-named-default': 'error',

    // Reports if a module's default export is unnamed
    'import/no-anonymous-default-export': 'off',

    // This rule enforces that all exports are declared at the bottom of the file.
    'import/exports-last': 'off',

    // Reports when named exports are not grouped together in a single export declaration or when multiple
    // assignments to CommonJS module.exports or exports object are present in a single file.
    'import/group-exports': 'off',

    // Forbid default exports
    'import/no-default-export': 'off',

    // Prohibit named exports
    'import/no-named-export': 'off',

    // Forbid a module from importing itself
    'import/no-self-import': 'error',

    // Forbid cyclical dependencies between modules
    'import/no-cycle': 'off',

    // Ensures that there are no useless path segments
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // Dynamic imports require a leading comment with a webpackChunkName
    'import/dynamic-import-chunkname': 'off',

    // Use this rule to prevent imports to folders in relative parent paths.
    'import/no-relative-parent-imports': 'off',

    // Reports modules without any exports, or with unused exports
    'import/no-unused-modules': 'off',
  },
};
