module.exports = {
   extends: [
      'react-app',
      'airbnb',
      'plugin:import/errors',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'prettier',
   ],
   settings: {
      'import/resolver': {
         typescript: {
            directory: './tsconfig.json',
         },
      },
   },
   rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
         1,
         {
            extensions: ['.tsx', '.jsx'],
         },
      ],
      'react/jsx-one-expression-per-line': 0,
      'react/jsx-props-no-spreading': 0,
      'import/order': [
         'error',
         {
            groups: [['builtin', 'external'], 'internal', ['sibling', 'parent', 'index']],
            'newlines-between': 'always',
         },
      ],
      'import/extensions': 0,
      'no-param-reassign': [
         'error',
         {
            props: true,
         },
      ],
      'no-return-await': 'error',
      eqeqeq: 'error',
      'no-unneeded-ternary': 'error',
      'no-console': 0,
      'import/prefer-default-export': 0,
      'react/prop-types': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/member-delimiter-style': [
         'error',
         {
            multiline: {
               delimiter: 'none',
            },
            singleline: {
               delimiter: 'semi',
            },
         },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 0,
   },
   parserOptions: {
      ecmaVersion: 2017,
   },
   env: {
      es6: true,
   },
}
