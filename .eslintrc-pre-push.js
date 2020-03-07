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
    'standard',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'semi': [2, 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': 'off',
    'no-empty': 'error',
    'padded-blocks': 'error',
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'space-before-function-paren': 'error',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
    }],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-unused-components': ['warn', {
      'ignoreWhenBindingPresent': false,
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never',
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'never',
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 1,
      'multiline': { 'max': 1 }
    }],
    'vue/no-v-html': 0,
    'no-console': 'error',
    'no-debugger': 'error',
  },
}
