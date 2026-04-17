import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { 
      sourceType: "commonjs", // Ajoute ceci pour CommonJS (require/module.exports)
      globals: {
        ...globals.node,      // Ajoute ceci pour reconnaître 'module', 'require', etc.
        ...globals.jest       // Optionnel : pour que ESLint reconnaisse 'test' et 'expect'
      } 
    }
  },
  pluginJs.configs.recommended,
];