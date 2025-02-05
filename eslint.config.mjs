import neostandard from 'neostandard'
import html from '@html-eslint/eslint-plugin'

export default [
  ...neostandard({ ts: true }),
  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    rules: {
      ...html.configs['flat/recommended'].rules,
      '@html-eslint/indent': ['error', 2],
    }
  }
]
