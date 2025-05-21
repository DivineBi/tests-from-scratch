module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    //rootDir: 'packages/react-app',
    //setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // or remove if unused
    testMatch: ['**/__tests__/**/*.test.ts?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  };