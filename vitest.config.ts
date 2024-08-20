import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    include: ['./tests/**/*.test.ts'],
    exclude: ['./docker/**/*'],
    environment: 'nuxt',
    //environment: 'happy-dom',
    reporters: [
      ['junit', { suiteName: 'Todos test suite'}],
      'hanging-process'
    ],
    outputFile: './junit.xml',
    globals: true,
  },
  resolve: {
    alias: {
      '~': __dirname
    }
  }
})
