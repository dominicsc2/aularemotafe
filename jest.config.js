module.exports = {
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/clean/presentation/components/common/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@clean/(.*)$': '<rootDir>/src/clean/$1',
    '@domain/(.*)$': '<rootDir>/src/clean/domain/$1',
    '@data/(.*)$': '<rootDir>/src/clean/data/$1',
    '@infrastructure/(.*)$': '<rootDir>/src/clean/infrastructure/$1',
    '@presentation/(.*)$': '<rootDir>/src/clean/presentation/$1',
    '@tests/(.*)$': '<rootDir>/tests/$1',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  }
}
