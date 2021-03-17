/*
 * commitlint 配置文件
 * https://commitlint.js.org/#/reference-configuration
 */
const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-enum': [2, 'always', ['ci', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']],
  },
};

module.exports = Configuration;
