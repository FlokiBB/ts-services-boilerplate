module.exports = {
  root: true,
  ignorePatterns: [
    '*.js',
    './dist'
  ],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
    tsconfigRootDir: __dirname,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'airbnb-typescript/base',
    'airbnb-base',
  ],
  env: {
    node: true,
    jest: true,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-underscore-dangle': ['error', {
      'allow': [
        '_to',
        '_confirmations',
        '_value'
      ],
    }],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'camelcase': ['error', {
      'allow': [
        'app_name',
      ],
    }],
    "no-use-before-define": "off",
    'no-shadow': 'off',
    'no-restricted-syntax': ['error', "BinaryExpression[operator='at']"],
    'no-await-in-loop': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/extensions': 'off',
    'max-len': ['error', { code: 150 }],
    'func-names': ['error', 'as-needed'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, minProperties: 6, consistent: true },
      ObjectPattern: { multiline: true, minProperties: 6, consistent: true },
      ImportDeclaration: { multiline: true, minProperties: 6, consistent: true },
      ExportDeclaration: { multiline: true, minProperties: 6, consistent: true },
    }],
    'prefer-destructuring': 'off',
    'no-continue': 'off',
    'import/no-import-module-exports': 'off',
  },
};
