module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    testMatch: ['**/__test__/**/*.(test|spec).tsx'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.app.json', // Menambahkan konfigurasi tsconfig di sini
      },
    },
  };
  