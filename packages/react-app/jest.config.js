module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-fixed-jsdom',
    testMatch: ['**/__tests__/**/*.test.ts?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], 
  };