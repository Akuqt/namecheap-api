import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      parser: "@typescript-eslint/parser",
    },
    plugins: {
      "typescript-eslint": tseslint,
    },
    rules: {
      indent: ["error", 2, { SwitchCase: 1 }],
      quotes: ["error", "double", { allowTemplateLiterals: false }],
      semi: ["error", "always"],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      curly: "off",
      "no-shadow": "off",
      "no-unused-vars": "error",
      "no-console": "warn",
    },
    ignores: [
      "**/coverage/**",
      "**/build/**",
      "**/dist/**",
      "**/release/**",
      "**/lib/**",
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
