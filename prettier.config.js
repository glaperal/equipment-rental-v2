/** @type {import('prettier').Config} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'], // Ensure Tailwind CSS plugin is loaded
  tailwindFunctions: ['clsx', 'cn', 'cva'], // Recognize custom utility functions
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true, // Prefer single quotes
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5', // Add trailing commas where valid in ES5 (objects, arrays, etc.)
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf', // Use Linux line endings
};
