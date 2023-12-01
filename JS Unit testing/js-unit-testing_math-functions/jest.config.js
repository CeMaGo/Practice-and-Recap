export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.m?js$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
 
  testMatch: ['**/*.test.mjs', '**/*.spec.mjs'], // Adjust the pattern based on your test file naming convention
};