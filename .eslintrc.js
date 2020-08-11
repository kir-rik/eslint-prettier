module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    'no-var': 'error',
    'max-len': [
      'error',
      {
        code: 50,
        ignoreUrls: true
      }
    ]
  }
}
