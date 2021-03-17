const Configuration = {
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']],
  },
};

module.exports = Configuration;
