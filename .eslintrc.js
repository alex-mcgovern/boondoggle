module.exports = {
  /** -----------------------------------------------------------------------------
   * 🏚 Env
   * ------------------------------------------------------------------------------- */

  env: {
    browser: true,
    node: true,
  },

  /** -----------------------------------------------------------------------------
   * 🤝 Extends
   * ------------------------------------------------------------------------------- */

  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:mdx/recommended",
    "plugin:react-perf/recommended",
    "prettier",
  ],

  /** -----------------------------------------------------------------------------
   * 🌍 Globals
   * ------------------------------------------------------------------------------- */

  globals: {
    cy: true,
    Cypress: true,
    fs: true,
  },

  /** -----------------------------------------------------------------------------
   * ⛔️ Ignore
   * ------------------------------------------------------------------------------- */

  ignorePatterns: [
    "**/public",
    "dist",
    "*.snap",
    "*.test.*",
    "*.mock.*",
    "*.svg",
    "*.md",
    "*.mdx",
    "coverage",
  ],

  /** -----------------------------------------------------------------------------
   * 💪 Overrides
   * ------------------------------------------------------------------------------- */

  overrides: [
    /**
     * Overrides for MDX files
     */

    // {
    //   files: "*.mdx",
    //   parser: "eslint-mdx",
    // },

    /**
     * Overrides for vanilla extract css.ts files
     */

    {
      files: ["**/*.css.ts"],
      rules: {
        "sonarjs/no-duplicate-string": "off",
      },
    },

    /**
     * Overrides for test files
     */

    {
      env: {
        jest: true,
      },
      files: ["**/*/test.ts", "**/*.test.tsx"],
      rules: {
        "sonarjs/no-duplicate-string": "off",
        "react-perf/jsx-no-jsx-as-prop": "off",
        "react-perf/jsx-no-new-array-as-prop": "off",
        "react-perf/jsx-no-new-function-as-prop": "off",
        "react-perf/jsx-no-new-object-as-prop": "off",
      },
    },

    /**
     * Ensure gatsby pages & page templates use default exports.
     */

    {
      files: [
        "gatsby-config.ts",
        "cypress.config.ts",
        "jest.*",
        "**/pages/**/*.tsx",
        "**/templates/**/*.tsx",
      ],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "error",
      },
    },
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    project: "./tsconfig.json",
    requireConfigFile: true,
  },

  /** -----------------------------------------------------------------------------
   * 📦 Plugins
   * ------------------------------------------------------------------------------- */

  plugins: [
    "react-perf",
    "sonarjs",
    "jsdoc",
    "@typescript-eslint",
    "unused-imports",
    "import",
  ],

  /** -----------------------------------------------------------------------------
   * 📄 Rules
   * ------------------------------------------------------------------------------- */

  rules: {
    "import/no-cycle": "error",
    "import/no-duplicates": "error",

    "react/button-has-type": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/jsx-props-no-spreading": "off",

    /**
     * Prevent eslint from complaining about dev dependencies imported in test files
     */

    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.ts",
          "**/*.test.tsx",
          "./test/**/*",
          "cypress.config.js",
        ],
        // packageDir: path.resolve(__dirname),
      },
    ],

    /**
     * Override annoying default behavior for unescaped entities, focusing on only the characters
     * most likely to break JSX. Although I've never experienced this issue personally.
     */

    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [
          {
            char: ">",
            alternatives: ["&gt;"],
          },
          {
            char: "}",
            alternatives: ["&#125;"],
          },
        ],
      },
    ],

    /**
     * Allow simpler prop typings for Typescript components.
     * ToDo: Consider generating react prop types at compile time for component library.
     * */

    "react/prop-types": "off",
    "react/require-default-props": "off",

    /**
     * Enforce "type imports", ensuring transpilers *absolutely* do not
     * import or include types in runtime JS.
     */

    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        disallowTypeAnnotations: true,
        prefer: "type-imports",
      },
    ],

    /**
     * Rules aimed at improving code readability and style consistency.
     */
    "@typescript-eslint/prefer-optional-chain": "error",
    "arrow-body-style": ["error", "always"],
    curly: ["error", "all"],
    "react/destructuring-assignment": [
      "error",
      "always",
      {
        destructureInSignature: "always",
        ignoreClassFields: true,
      },
    ],

    /**
     * Warn on patterns that may cause frontend performance degradation.
     */

    "react-perf/jsx-no-jsx-as-prop": "warn",
    "react-perf/jsx-no-new-array-as-prop": "warn",
    "react-perf/jsx-no-new-function-as-prop": "warn",
    "react-perf/jsx-no-new-object-as-prop": "warn",

    /**
     * Ensure errant console.log & console.debug's are not left lying about,
     * while allowing log levels used for intentionally logging a result.
     */

    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"],
      },
    ],

    /**
     * Ensure named exports are used, which helps speed up code refactoring
     * and ensures things are referenced consistently throughout codebase
     */

    "import/prefer-default-export": "off",
    "import/no-default-export": "error",

    /**
     * Disable default unused vars/imports rules in favour of unused-imports
     * plugin, which enables fixing these issues on lint via the --fix flag.
     */

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",

    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
  },

  /** -----------------------------------------------------------------------------
   * 🛠 Settings
   * ------------------------------------------------------------------------------- */

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["packages/*/tsconfig.json", "tsconfig.json"],
      },

      node: {
        extensions: [".ts", ".tsx", ".json"],
      },
    },
  },
};
