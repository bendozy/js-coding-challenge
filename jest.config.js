module.exports = {
  displayName: 'Swagger Proccessor Tests',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>/app/tests/localstorage-mock.js',
  setupFiles: ['<rootDir>/app/tests/jestsetup.js'],
};
