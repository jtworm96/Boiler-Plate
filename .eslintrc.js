module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
    "no-plusplus": "off",
    "spaced-comment": "off",
    "no-restricted-syntax": "off",
    "guard-for-in" : "off",
    "consistent-return": "off",
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-access-state-in-setstate": "off",
    "max-len": "off",
      //React Rules
    "react/jsx-one-expression-per-line": "off",
    "react/forbid-prop-types": "off",
    "react/prop-types": "off",
    "react/no-unused-prop-types": "off",
    "react/no-deprecated": "off",
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-access-state-in-setstate": "off",
    "import/extensions": "off",
    "no-array-index-key": "off",
  },
};
