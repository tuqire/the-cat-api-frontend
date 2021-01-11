module.exports = {
  setupFiles: ['<rootDir>/tests/setup.tsx'],
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'ts-jest',
  },
  testRegex: '(/tests/specs/(.*)\\.test)\\.(ts|tsx)?$',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    'assets/(.*)': '<rootDir>/tests/mocks/fileMock.tsx',
  },
  resetMocks: true,
};
