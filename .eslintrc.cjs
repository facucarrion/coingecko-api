module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    './node_modules/standard/eslintrc.json',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'warn'
  },
  settings: {},
  ignorePatterns: [
    '**/*.html',
    '**/*.png',
    '**/*.jpg',
    '**/*.svg',
    '**/*.webp',
    '**/*.css',
    '**/*.json'
  ]
}
