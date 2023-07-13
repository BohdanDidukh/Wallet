module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'off',
    'linebreak-style': 'off',
    'prefer-const': 'error',
    quotes: ['error', 'double'],
    'jsx-quotes': ['error', 'prefer-double'],
    indent: ['warn', 2],
    semi: ['warn', 'always'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    "jsx-a11y/label-has-associated-control": "off",
    "no-param-reassign": "off",
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
