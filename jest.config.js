module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.(ts,tsx)'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@domain/(.*)$': '<rootDir>/src/domain/$1'
  },
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
