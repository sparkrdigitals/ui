module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.app.json',
  },
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react-refresh', 'import'],
  rules: {
    quotes: ['error', 'single'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-absolute-path': 'off',
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    quotes: 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.tsx', '.ts'] },
    ],
    'global-require': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': [2, { skipUndeclared: true }],
    'react/state-in-constructor': [2, 'never'],
    'react/require-default-props': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
      },
    ],
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'import/order': 'off',
    'prettier/prettier': ['error'],
  },
};
