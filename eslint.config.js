import importPlugin from "eslint-plugin-import";

import config from "./index.js";

export default [
  ...config,
  {
    plugins: {
      "import": importPlugin,
    },
    rules: {
      "import/no-default-export": "off",
      "import/prefer-default-export": ["error", { target: "any" }],
    },
  },
];
