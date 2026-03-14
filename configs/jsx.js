import eslintConfigPrettier from "eslint-config-prettier/flat";

import common from "../lib/common.js";
import react from "../lib/react.js";

export default [...common, ...react, eslintConfigPrettier];
