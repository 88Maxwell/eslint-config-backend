module.exports = {
    extends: [
        './rules/base',
        './rules/import',
        './rules/prefer-spread',
        './rules/more',
        ].map(require.resolve),
    rules: {},
};
