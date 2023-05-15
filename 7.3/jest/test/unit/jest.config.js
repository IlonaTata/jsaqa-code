const config = {
    " collectCoverageFrom ": [
        {
            "branches": 100,
            "functions": 100,
            "lines": 100 },
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/coverage/**',
    ],}; module.exports = config;