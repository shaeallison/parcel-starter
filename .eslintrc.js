module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    parser: '@babel/eslint-parser',
    project: './tsconfig.json',
    babelOptions: {
      parserOpts: {
        plugins: ['jsx', 'typescript']
      }
    }
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    curly: ['error', 'multi-or-nest', 'consistent'],
    'multiline-ternary': 'off',
    indent: 'off', // https://typescript-eslint.io/rules/indent/
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['snake_case', 'camelCase', 'PascalCase', 'UPPER_CASE']
      }
    ],
    'react/prop-types': 'off'
  }
}
