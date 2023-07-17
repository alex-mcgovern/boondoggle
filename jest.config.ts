module.exports = {
  globalSetup: "<rootDir>/test/global_setup.ts",
  moduleNameMapper: {
    ".*node_modules+.*.css$": "<rootDir>/__mocks__/style_mock.js",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/file-mock.ts", // <-- haven't bothered with this yet
  },
  setupFiles: ["<rootDir>/test/setup_tests.ts"],
  setupFilesAfterEnv: ["<rootDir>/test/setup_test_env.ts"],
  testEnvironmentOptions: {
    url: "http://localhost",
  },
  testMatch: ["<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: [
    "node_modules",
    "\\.cache",
    "<rootDir>.*/public",
    "cypress",
  ],
  transform: {
    "\\.css\\.ts$": "@vanilla-extract/jest-transform",
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  verbose: false,
};
