module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    // "standard",
    "plugin:react/jsx-runtime",
    "plugin:testing-library/react",
    "plugin:jest/all",
  ],
  plugins: ["import", "react"],
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  rules: {
    "import/no-unresolved": "error", // Ensure imports point to a file/module that can be resolved
    "import/named": "error", // Ensure named imports correspond to a named export in the remote file
    "import/default": "error", // Ensure a default export is present, given a default import
    "import/namespace": "error", // Ensure imported namespaces contain dereferenced properties as they are dereferenced
    "import/no-duplicates": "error", // Report repeated import of the same module in multiple places
    "import/no-named-as-default": "error", // Report use of exported name as identifier of default export
    "react/jsx-uses-react": "error", // Prevent React being incorrectly marked as unused
    "react/jsx-uses-vars": "error", // Prevent variables used in JSX being incorrectly marked as unused
  },
};
