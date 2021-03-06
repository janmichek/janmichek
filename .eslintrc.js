module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:nuxt/recommended',
    'standard',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
  ],

  rules: {
    'semi': [2, 'never'],
    'comma-dangle': ['warn', 'always-multiline'],
    'indent': 'off',
    'no-empty': 'warn',
    'padded-blocks': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'space-before-function-paren': 'warn',
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': 'warn',
    'vue/script-indent': ['warn', 2, {
      'baseIndent': 1,
    }],
    'vue/html-indent': ['warn', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
    }],
    'vue/mustache-interpolation-spacing': ['warn', 'always'],
    'vue/no-unused-components': ['warn', {
      'ignoreWhenBindingPresent': false,
    }],
    'vue/html-closing-bracket-newline': ['warn', {
      'singleline': 'never',
      'multiline': 'never',
    }],
    'vue/html-closing-bracket-spacing': ['warn', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'never',
    }],
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 1,
      'multiline': { 'max': 1 },
    }],
    'vue/no-v-html': 0,
    'no-console': 'off',
    'no-debugger': 'off',
  },
}
