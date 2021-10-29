require('dotenv').config()

module.exports = {
  setupFiles: ['dotenv/config'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json'
  ],
  transform: {
    "^.+\\.ts$": "ts-jest",
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue2-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  coverageThreshold: {
    global: {
      branches: process.env.COVERAGE_BRANCHES ?? 0,
      functions: process.env.COVERAGE_FUNCTIONS ?? 0,
      lines: process.env.COVERAGE_LINES ?? 0,
      statements: process.env.COVERAGE_STATEMENTS ?? 0
    }
  },
  testEnvironment: 'jsdom',
  verbose: true
}
