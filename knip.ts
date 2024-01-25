import type { KnipConfig } from "knip";

const config: KnipConfig = {
    entry: ["src/*/index.tsx", "src/*/styles.css.ts", "src/icon-flag/*.tsx"],
    ignore: [],
    project: ["src/**/*.{js,jsx,ts,tsx}"],
};

export default config;
