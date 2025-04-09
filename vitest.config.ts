import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Use Vitest globals (describe, it, expect, etc.)
    environment: 'jsdom', // Simulate browser environment for React components
    setupFiles: './vitest.setup.ts', // Setup file for mocks/polyfills
    // Optional: Configure coverage reporting
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
    },
  },
  resolve: {
    // Alias setup to match tsconfig.json for imports like @/*
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
