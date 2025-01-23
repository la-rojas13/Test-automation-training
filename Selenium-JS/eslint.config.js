import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'prefer-const': 'warn',         // Warns about variables that should be const
      'semi': ['error', 'always'],    // Enforces semicolons at the end of statements
      'quotes': ['error', 'single'], // Enforces single quotes for strings
    },
  },
  pluginJs.configs.recommended,       // ESLint's recommended configuration
];
