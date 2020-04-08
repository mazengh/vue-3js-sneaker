process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|svg|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['/node_modules/(three/examples/jsm/controls/OrbitControls)/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  collectCoverage: false,
  coverageDirectory: './coverage/',
  coverageReporters: ['html', 'text-summary'],
  // transform: {
  //   '.*\\.(vue)$': 'vue-jest',
  //   '^.+\\.js$': 'babel-jest',
  // },
};

// module.exports = {
//   verbose: true,
//   moduleFileExtensions: ["js", "json", "vue"],
//   transform: {
//     ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
//     "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
//     ".+\\.(css|styl|less|sass|scss|png|svg|jpg|ttf|woff|woff2)$":
//       "jest-transform-stub"
//   },
//   transformIgnorePatterns: ["/node_modules/"],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1"
//   },
//   testMatch: [
//     "**/tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
//   ],
//   collectCoverage: false,
//   coverageDirectory: "./coverage/",
//   collectCoverageFrom: [
//     "src/components/McqForm.vue",
//     "src/components/CheckFieldset.vue",
//     "src/components/CheckInput.vue",
//     "!**/node_modules/**"
//   ],
//   // collectCoverageFrom: ["src/components/*.{js,vue}", "!**/node_modules/**"],
//   coverageReporters: ["html", "text-summary"]
// };
