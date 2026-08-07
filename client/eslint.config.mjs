// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default withNuxt(
  // The Nuxt-generated config in this repo does not wire the TypeScript
  // parser for <script setup lang="ts"> blocks. Register it explicitly.
  {
    name: 'nuxt/typescript-parser',
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
  },
  // Your custom configs here
)
