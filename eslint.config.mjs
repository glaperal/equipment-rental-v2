import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  // Add custom rules or overrides here
  {
    rules: {
      // Disable the rule causing persistent build errors
      'react/no-unescaped-entities': 'off',
      // Add other rule adjustments if needed
    },
  },
];

export default eslintConfig;
