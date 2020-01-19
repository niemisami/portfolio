module.exports = {
  extends: 'airbnb',
  plugins: [
    'simple-import-sort',
  ],
  rules: {
    semi: 0,
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'comma-dangle': 0,
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
        overrides: {
          if: {
            after: false
          },
          for: {
            after: false
          },
          while: {
            after: false
          },
          switch: {
            after: false
          },
          catch: {
            after: false
          }
        }
      }
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'simple-import-sort/sort': [
      2,
      {
        groups: [
          ['^react$', '^prop-types$', '^react', '^@?\\w'],
        ],
      },
    ],
    'sort-imports': 0,
    'import/order': 0,
    'arrow-parens': [1, 'as-needed'],
    'jsx-quotes': ["error", "prefer-single"],
    'react/jsx-wrap-multilines': [
      1,
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      }],
    'react/jsx-handler-names': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/no-danger': 0,
    'react/prop-types': 0
  },
  globals: {
    __PATH_PREFIX__: true,
  },
}
