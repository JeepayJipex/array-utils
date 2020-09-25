module.exports = {
  roots: [
    '<rootDir>/tests'
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@custom-types/(.*)$': '<rootDir>/src/custom-types/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^@method/(.*)$': '<rootDir>/src/method/$1',
    '^@helpers/(.*)$': '<rootDir>/src/helpers/$1'
  }
}
