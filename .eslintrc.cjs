module.exports = {
  root: true,
  extends: ['@fullstacksjs'],
  rules: {
    'import/no-unresolved': [
      'error',
      {
        caseSensitiveStrict: true,
        caseSensitive: true,
        ignore: ['\\.js$'],
      },
    ],
  },
};
