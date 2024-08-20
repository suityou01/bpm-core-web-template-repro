import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    pool: 'forks',
    include: ['./tests/**/*.test.ts'],
    exclude: [
      './docker/', 
      './.nuxt/'
    ],
    environment: 'nuxt',
    //environment: 'happy-dom',
    globals: true
  },
  resolve: {
    alias: {
      '~': __dirname
    }
  }
})
