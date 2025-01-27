import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import _import from "eslint-plugin-import";
import preferArrow from "eslint-plugin-prefer-arrow";
import globals from "globals";

export default [
  eslint.configs.recommended,
  {
    files: [
      "*.js",
      "*.jsx",
      "*.mjs",
      "*.ts",
      "*.tsx",
      "**/*.js",
      "**/*.jsx",
      "**/*.mjs",
      "**/*.ts",
      "**/*.tsx",
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "prefer-arrow": preferArrow,
      import: _import,
      "@stylistic": stylistic,
    },
    rules: {
      complexity: ["error", 10],
      eqeqeq: ["error", "smart"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      curly: ["error", "all"],
      "brace-style": ["error", "1tbs"],
      "eol-last": ["error", "always"],
      "space-in-parens": ["error", "never"],
      "no-multi-spaces": ["error"],
      "no-trailing-spaces": ["error"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "space-before-blocks": ["error"],
      "import/no-default-export": "error",
      "arrow-body-style": ["error", "as-needed"],
      "no-return-await": ["error"],
      "default-case-last": ["error"],
      "no-console": "off",
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
      "comma-spacing": ["error", { before: false, after: true }],
      "generator-star-spacing": ["error", { before: false, after: true }],
      "arrow-spacing": ["error", { before: true, after: true }],
      "keyword-spacing": ["error", { before: true, after: true }],
      "no-unused-vars": [
        "error",
        {
          caughtErrors: "none",
        },
      ],
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
        },
      ],
      "@stylistic/semi": ["error", "always"],
      "prefer-const": [
        "error",
        {
          destructuring: "all",
        },
      ],
      "max-lines": [
        "error",
        {
          max: 600,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      "max-len": [
        "error",
        {
          code: 120,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      "space-before-function-paren": [
        "error",
        {
          anonymous: "never",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "never",
        },
      ],
      "prefer-arrow/prefer-arrow-functions": [
        "error",
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      "prefer-arrow-callback": [
        "error",
        {
          allowNamedFunctions: true,
        },
      ],
      "func-style": [
        "error",
        "expression",
        {
          allowArrowFunctions: true,
        },
      ],
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          groups: [
            "external",
            "builtin",
            "internal",
            "sibling",
            "parent",
            "index",
          ],
        },
      ],
      "padded-blocks": ["error", "never"],
    },
  },
  {
    files: [
      "eslint.config.js",
      "*eslint.config.js",
      "**/eslint.config.js",
      "**/*eslint.config.js",
    ],
    plugins: {
      import: _import,
    },
    rules: {
      "import/no-default-export": "off",
    },
  },
];
