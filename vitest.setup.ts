// vitest.setup.ts
import '@testing-library/jest-dom/vitest' // Extends Vitest's expect with jest-dom matchers

// Add any other global setup for tests here, e.g., mocking environment variables
// Example:
// import { vi } from 'vitest'
// vi.mock('next/navigation', () => ({
//   useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }),
//   useSearchParams: () => new URLSearchParams(),
//   usePathname: () => '/',
// }));

// Mock global fetch if needed, or use libraries like msw
// global.fetch = vi.fn();
