module.exports = {
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: ['<rootDir>/src/**/*.(ts,tsx)'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@domain/(.*)$': '<rootDir>/src/domain/$1',
    '@data/(.*)$': '<rootDir>/src/data/$1',
    '@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
    '@tests/(.*)$': '<rootDir>/tests/$1'
  },
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
