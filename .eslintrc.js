module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  globals: {
    window: true,
    module: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'jsdoc'],
  ignorePatterns: [
    '**/tsconfig.json',
    '**/package.json',
    '**/dist/**/*',
    '**/*.md',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        minimumDescriptionLength: 10,
        'ts-expect-error': 'allow-with-description',
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    // TS handles this and ESLint doesn't understand _foo
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    curly: 'error',
    eqeqeq: 'error',

    'key-spacing': [
      'error',
      { beforeColon: false, afterColon: true, mode: 'strict' },
    ],
    'keyword-spacing': ['error', { before: true, after: true }],
    'max-classes-per-file': ['error', 20],
    'max-len': 'off', // To be enabled
    'no-alert': 'error',
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': ['error', { boolean: false }],
    'no-implied-eval': 'error',
    'no-irregular-whitespace': 'error',
    'no-label-var': 'error',
    'no-multiple-empty-lines': 'error',
    'no-octal-escape': 'error',
    'no-restricted-globals': ['error', 'xdescribe', 'fit', 'fdescribe'],
    'no-prototype-builtins': 'off',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'off',
    'no-unused-expressions': 'error',
    'no-useless-computed-key': 'off',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'off',
    'quote-props': ['error', 'as-needed'],
    semi: ['error', 'always'],
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'valid-typeof': ['error', { requireStringLiterals: true }],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    // jsdoc
    'jsdoc/check-alignment': 'warn',
    'jsdoc/newline-after-description': 'warn',

    // import
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-cycle': 'off',
    'import/no-useless-path-segments': 'off',
    'import/order': 'off',
  },
};
