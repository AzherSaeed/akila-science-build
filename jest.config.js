module.exports = {
  displayName: 'Akila Analytics Test Report',
  moduleNameMapper: {
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
    '@assets': '<rootDir>/src/assets/index.js',
    '@config': '<rootDir>/src/config.js',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@solutions/(.*)$': '<rootDir>/src/pages/solutions/$1',
    '@useCases/(.*)$': '<rootDir>/src/pages/useCases/$1',
    '@contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
    '@routes/(.*)$': '<rootDir>/src/routes/$1',
  },
};
