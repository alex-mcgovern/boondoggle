module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:perfectionist/recommended-natural",
        "prettier",
    ],
    ignorePatterns: [
        ".git",
        "build",
        "dist",
        "docs",
        "node_modules",
        "storybook-static",
        "tmp",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
        {
            files: ["**/*.css.ts", "**/stories.tsx"],
            rules: {
                "jsdoc/require-jsdoc": "off",
            },
        },
    ],

    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react", "jsdoc"],
    rules: {
        "@typescript-eslint/consistent-type-imports": [
            "error",
            { prefer: "type-imports" },
        ],
        // "jsdoc/require-description": [
        //     "warn",
        //     {
        //         contexts: [
        //             // "TSInterfaceDeclaration",
        //             // "ObjectExpression",
        //             // "ArrowFunctionExpression",
        //         ],
        //         descriptionStyle: "body",
        //     },
        // ],
        "jsdoc/require-jsdoc": [
            "warn",
            {
                checkGetters: true,
                contexts: [
                    "ArrowFunctionExpression",
                    "FunctionDeclaration",
                    "FunctionExpression",
                    "MethodDefinition",
                    "Property",
                    "TSDeclareFunction",
                    "TSEnumDeclaration",
                    "TSInterfaceDeclaration",
                    "TSMethodSignature",
                    "TSPropertySignature",
                    // "TSTypeAliasDeclaration",
                    "VariableDeclaration",
                ],
                enableFixer: false,
                publicOnly: true,
                require: {
                    ArrowFunctionExpression: true,
                    ClassDeclaration: true,
                    ClassExpression: true,
                    FunctionDeclaration: true,
                    FunctionExpression: true,
                    MethodDefinition: true,
                },
            },
        ],
        "no-restricted-imports": [
            "error",
            {
                paths: [
                    {
                        message:
                            "Use deep import, e.g. `@fortawesome/pro-solid-svg-icons/faCheck`",
                        name: "@fortawesome/pro-solid-svg-icons",
                    },
                    {
                        message:
                            "Use deep import, e.g. `@fortawesome/pro-duotone-svg-icons/faCheck`",
                        name: "@fortawesome/pro-duotone-svg-icons",
                    },
                    {
                        message:
                            "Use deep import, e.g. `@fortawesome/free-brands-svg-icons/faCheck`",
                        name: "@fortawesome/free-brands-svg-icons",
                    },
                ],
            },
        ],
        // "jsdoc/require-description-complete-sentence": "error",
        "perfectionist/sort-objects": [
            "error",
            {
                "partition-by-comment": "Group:**",
            },
        ],
        "react/display-name": "off",
        "react/function-component-definition": "error",
        "react/prop-types": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
