module.exports = {
  webpack: (originalWebpackConfig) => ({ ...originalWebpackConfig }),
  jest: (originalJestConfig) => ({ ...originalJestConfig }),
};
