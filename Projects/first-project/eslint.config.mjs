import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'], // Apply to all JS/TS files
    languageOptions: {
      globals: globals.browser, // Use browser globals
    },
    rules: {
      eqeqeq: 'off', // Disable == and != checks
      'no-unused-vars': 'error', // Enable no-unused-vars rule
      'prefer-const': 'error', // Prefer const over let
      'no-var': 'error', 
      'no-unused-expressions': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
    ignores: ['node_modules/*', 'dist/*'], // Ignore node_modules and dist directories
  },
  pluginJs.configs.recommended, // Use recommended JS rules
  ...tseslint.configs.recommended, // Use recommended TS rules
  
];