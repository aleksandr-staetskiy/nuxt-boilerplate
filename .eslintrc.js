module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    '@alertgroup/eslint-config-alertgroup',
  ],

  settings: {
    'import/resolver': {
      alias: [
        ['~', './'],
      ],
    },
  },

  // add your custom rules here
  rules: {
    // @todo исправить линтинг динамического импорта
    'template-curly-spacing': 'off',
    indent: 'off',
  },
}
