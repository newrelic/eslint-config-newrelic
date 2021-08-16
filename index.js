/*
 * Copyright 2020 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict'
const currentYear = new Date().getFullYear()

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: false
  },
  extends: [
    'plugin:node/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: '2019'
  },
  plugins: [
    'header',
    'prettier'
  ],
  ignorePatterns: ['invalid-json/'],
  rules: {
    'brace-style': 'error',
    'comma-style': ['error', 'last'],
    'consistent-return': 'error',
    curly: 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'smart'],
    camelcase: ['error', {properties: 'never'}],
    'dot-notation': 'error',
    'func-names': 'error',
    'guard-for-in': 'error',
    'header/header': ['error', 'block', [
      '',
      {
        pattern: ' * Copyright \\d{4} New Relic Corporation. All rights reserved.',
        template: ` * Copyright ${currentYear} New Relic Corporation. All rights reserved.`
      },
      ' * SPDX-License-Identifier: Apache-2.0',
      ' '
    ], 2],
    'keyword-spacing': 'error',
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 5],
    'new-cap': 'error',
    'no-const-assign': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-else-return': 'error',
    'no-floating-decimal': 'error',
    'no-lonely-if': 'error',
    'no-mixed-requires': 'error',
    'no-multiple-empty-lines': 'error',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-new': 'error',
    'no-new-func': 'warn',
    'no-shadow': ['warn', {allow: ['shim']}],
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', {functions: false, classes: false}],
    'node/shebang': 'off',
    'node/no-deprecated-api': [
      'error',
      {
        ignoreModuleItems: [
          'url.parse'
        ]
      }
    ],
    'one-var': ['error', 'never'],
    'padded-blocks': ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        printWidth: 100,
        quoteProps: 'consistent',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false
      }
    ],
    radix: 'error',
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'spaced-comment': 'error',
    'space-unary-ops': 'error',
    strict: 'error',
    'use-isnan': 'error',
    'wrap-iife': 'error'
  },
  overrides: [
    {
      files: [
        'test/versioned/**/**',
        'tests/versioned/**/**'
      ],
      rules: {
        'node/no-extraneous-require': 'off',
        'node/no-missing-require': 'off',
        'node/no-unpublished-require': 'off',
      }
    },
    {
      files: [
        'test/**/**/**',
        'tests/**/**/**'
      ],
      rules: {
        'func-names': 'off',
        'max-nested-callbacks': 'off',
        'no-shadow': ['warn', { allow: ['t', 'err', 'shim', 'error'] }]
      }
    }
  ]
}
