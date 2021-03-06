module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  settings: {
    react: {
      version: "16.13.1",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "babel-eslint",
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: false }],
    "no-unused-vars": "warn",
    "func-names": 0,
    "react/prop-types": "warn",
    "no-param-reassign": "warn",
    "react/require-default-props": 0,
    "react/jsx-filename-extension": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/react-in-jsx-scope": "off",
    "no-plusplus": 0,
    "jsx-a11y/alt-text": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-curly-newline": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-wrap-multilines": 0,
    "react/forbid-prop-types": 0,
    "react/no-array-index-key": 0,
    "react/jsx-one-expression-per-line": 0,
    radix: 0,
  },
};
