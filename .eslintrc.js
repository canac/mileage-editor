'use strict';

module.exports = {
  ignorePatterns: ['dist/', 'src/generated/'],
  extends: [
    '@vue/airbnb',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [{
    files: ['.eslintrc.js'],
    parserOptions: {
      sourceType: 'script',
    },
  }, {
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:vue/recommended',
    ],
    files: ['vite.config.ts', 'src/**/*.ts', 'src/**/*.vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      project: 'tsconfig.json',
      extraFileExtensions: ['.vue'],
    },
    rules: {
      'import/extensions': 0,
      'import/no-unresolved': 0,
      'import/order': ['error', { alphabetize: { order: 'asc' } }],
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
    },
  }],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['error', { code: 120 }],

    // Allow ForOfStatement disabled by the airbnb styleguide
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    strict: ['error', 'global'],
  },
};
