module.exports = {
  displayName: 'Swagger Proccessor Tests',
  // collectCoverageFrom: [!'<rootDir>/app/tests/*.js'],
  collectCoverageFrom: [
    '<rootDir>/app/**/*.js',
    '!<rootDir>/app/tests/*.js',
    '!<rootDir>/app/store/*.js',
    '!<rootDir>/app/utils/*.js',
  ],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>/app/tests/localstorage-mock.js',
  setupFiles: ['<rootDir>/app/tests/jestsetup.js'],
};
