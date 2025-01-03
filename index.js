'use strict'

const neostandard = require('neostandard')
const sonarjs = require('eslint-plugin-sonarjs')
const header = require('./eslint-plugin-newrelic-header.js')

// The new eslint configuration format is a simple array of configuration
// objects. See https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects.
//
// While working on the config, it can be helpful to run:
//  npx @eslint/config-inspector

const plugins = {
  ...neostandard.plugins,
  sonarjs,
  header
}

const nodeRecommended = neostandard.plugins.n.configs['flat/recommended']
delete nodeRecommended.languageOptions.sourceType
nodeRecommended.rules['n/no-unsupported-features/node-builtins'] = ['error', { version: '>=18.8.0' }]
nodeRecommended.rules['n/no-process-exit'] = 'off'
nodeRecommended.rules['n/no-deprecated-api'] = [
  'error',
  {
    ignoreModuleItems: [
      'url.parse'
    ]
  }
]

const baselineNewRelicConfig = {
  plugins: {
    header,
  },

  rules: {
    'consistent-return': 'off',
    'no-console': 'warn',

    // Enable file header checking and autocorrection.
    'header/header': 'error',

    // This one enforces `!!thing` syntax, which some folks find difficult
    // to read:
    'no-unneeded-ternary': 'off',

    // There are times we'd rather have import statements close to the
    // thing that needed them:
    'import-x/first': 'off',

    // Prefer single quotes, but utilize others to avoid escaping:
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

    // Neostandard sets this to "warn", but we'd like "error":
    'object-shorthand': 'error',

    // @eslint/config-inspector has highlighted this rule as being deprecated.
    // We don't JSX anyway, so goodbye:
    '@stylistic/jsx-indent': 'off',

    // These neostandard would generate unnecessary noise:
    '@stylistic/space-before-function-paren': 'off'
  },

  linterOptions: {
    reportUnusedDisableDirectives: 'error'
  }
}

const configs = {
  baselineNewRelicConfig,
  nodeRecommended,

  neostandard: neostandard(),

  sonarjsBaselineOverrides: {
    rules: {
      // This rule picks up inlined lambda functions as a violation:
      'sonarjs/no-nested-functions': 'off',

      // Don't bug us. We'll get to it (maybe):
      'sonarjs/todo-tag': 'warn',
      'sonarjs/fixme-tag': 'warn',

      // Sonar be on that stuff. `static readonly FOO` is not valid JavaScript:
      'sonarjs/public-static-readonly': 'off',

      // Agree to disagree on their explanation for this one:
      'sonarjs/no-parameter-reassignment': 'off'
    }
  },

  sonarjsTestsOverrides: {
    rules: {
      // We sometimes need to shadow things like Promise for testing:
      'sonarjs/no-globals-shadowing': 'off',
      // Sonar doesn't like our test files that build tests:
      'sonarjs/no-empty-test-file': 'off',
      // Some of our tests hit local HTTP endpoints:
      'sonarjs/no-clear-text-protocols': 'off',
      // We don't always need secure random in tests:
      'sonarjs/pseudo-random': 'off',
      // We need to use `os.exec` and such at times:
      'sonarjs/os-command': 'off',
      'sonarjs/no-os-command-from-path': 'off',
      // We have to use bunk passwords in tests:
      'sonarjs/no-hardcoded-passwords': 'off',
      // We will have slow regular expressions in tests and it is okay:
      'sonarjs/slow-regex': 'off',
      // The x-powered-by header has no bearing on the quality of our tests:
      'sonarjs/x-powered-by': 'off',
      // We sometimes need to build new functions via `new Function`:
      'sonarjs/code-eval': 'off',
      'no-new-func': 'off',
      // Sometimes we add dummy values that sonar doesn't like:
      'sonarjs/no-hardcoded-ip': 'off',
      // We need some side effect constructors in tests:
      'sonarjs/constructor-for-side-effects': 'off',
      // Tests don't need "safe" permissions:
      'sonarjs/file-permissions': 'off',
    }
  }
}

module.exports = {
  configs,
  plugins,
  recommended: [
    ...neostandard(),
    sonarjs.configs.recommended,
    configs.sonarjsBaselineOverrides,
    nodeRecommended,
    baselineNewRelicConfig
  ]
}
