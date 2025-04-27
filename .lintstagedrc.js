module.exports = {
    // Lint & format JavaScript files
    "*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    // Format other file types
    "*.{json,css,md}": [
      "prettier --write"
    ]
  };
  