export default {
    "roots": [
      "<rootDir>/tests"
    ],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "moduleNameMapper": {
        "^@entity/(.*)$": "<rootDir>/src/entity/$1",
        "^@method/(.*)$": "<rootDir>/src/method/$1"
      }
  }