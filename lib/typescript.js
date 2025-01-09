import stylistic from "@stylistic/eslint-plugin";
import typescript from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default [
  {
    files: [
      "*.ts",
      "*.tsx",
      "**/*.ts",
      "**/*.tsx",
    ],
    languageOptions: {
      parser: parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.js"],
        },
      },
    },
    plugins: {
      "@stylistic": stylistic,
      "@typescript-eslint": typescript,
    },
    rules: {
      "@stylistic/type-annotation-spacing": ["error"],
      "@stylistic/indent": [
        "error",
        2,
        {
          SwitchCase: 1,
        },
      ],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },
          singleline: {
            delimiter: "semi",
            requireLast: false,
          },
        },
      ],
      "@typescript-eslint/prefer-namespace-keyword": ["error"],
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-undef": "off",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: ["default"],
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: ["typeLike", "enumMember"],
          format: ["PascalCase"],
        },
        {
          selector: ["parameter"],
          modifiers: ["destructured"],
          format: null,
        },
        {
          selector: ["property", "objectLiteralProperty"],
          format: null,
        },
        {
          selector: [
            "classProperty",
            "objectLiteralProperty",
            "typeProperty",
            "classMethod",
            "objectLiteralMethod",
            "typeMethod",
            "accessor",
            "enumMember",
          ],
          modifiers: ["requiresQuotes"],
          format: null,
        },
        {
          selector: ["variable"],
          modifiers: ["const"],
          types: ["function"],
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: ["variable"],
          modifiers: ["destructured"],
          format: null,
        },
        {
          selector: ["variable"],
          modifiers: ["const"],
          types: ["boolean", "string", "number", "array"],
          format: ["camelCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
        {
          selector: ["memberLike"],
          modifiers: ["private"],
          format: ["camelCase"],
          leadingUnderscore: "require",
        },
      ],
    },
  },
];
