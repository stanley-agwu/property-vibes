module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'airbnb-base',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'prettier', 'simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        endOfLine: 'auto',
      },
    ],
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-misused-promises': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'simple-import-sort/exports': 2,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'sort-imports': 0,
    'import/order': 0,
    '@typescript-eslint/naming-convention': [
      1,
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
    ],
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          // react and react scoped imports first, and then other packages
          ['^react', '^[a-zA-Z]'],
          // Packages starting with '@'
          ['^@[a-zA-Z]'],
          // Packages starting with '~'
          ['^~'],
          // Side effects imports
          ['^\\u0000'],
          // Other local absolute imports
          ['^@/', '^assets', '^common', '^mocks', '^tests', '^views'],
          // Relative imports
          ['^\\.'],
          // Parent relative imports '../'
          ['^\\.{2}/(?!.*\\.(css|s[ac]ss)$).+$'],
          // Siblings relative imports './'
          ['^\\./(?!.*\\.(css|s[ac]ss)$).+$'],
          // Styles imports
          ['\\.(css|s[ac]ss)$'],
        ],
      },
    ],
  },
  ignorePatterns: ['build/*', 'coverage/*', 'public/*'],
};

