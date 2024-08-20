import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.ts"],
    },
    {
        ignores: [
            "**/*.config.[t|j]s", 
            "!**/eslint.config.js", 
            "**/docker/", 
            "**/tests/", 
            ".output/", 
            ".nuxt/"
        ]
    },
    {
        rules: {
            semi: "error",
            "prefer-const": "error"
        },
        linterOptions: {
            noInlineConfig: true
        }
    }
];