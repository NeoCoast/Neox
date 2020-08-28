module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(spec|test)(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "collectCoverage": true,
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
