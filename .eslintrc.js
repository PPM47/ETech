const { rules } = require('eslint-config-prettier')

module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms', 'prettier'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'simple-import-sort/imports': 'error',
    'no-console': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'import/prefer-default-export': 'off',
    // 'import/extensions': 'off',
    // 'import/no-cycle': 'off',
  },
}

