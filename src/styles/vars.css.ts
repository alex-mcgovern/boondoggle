import { createGlobalTheme } from "@vanilla-extract/css";

import { color } from "./color_palette.css";

export const fontSizeRaw = {
    bodyLg: "1rem", // 16px
    bodyMd: "0.875rem", // 14px
    bodySm: "0.75rem", // 12px
    h1: "2.5rem", // 40px
    h2: "2rem", // 32 px
    h3: "1.75rem", // 28px
    h4: "1.5rem", // 24px
    h5: "1.25rem", // 20px
    h6: "1rem", // 16px
    root: "16px",
};

export const lineHeightRaw = {
    bodyLg: "1.5rem", // 24px
    bodyMd: "1.5rem", // 24px
    bodySm: "1rem", // 16px
    h1: "3rem", // 48px
    h2: "2.5rem", // 40px
    h3: "2rem", // 32px
    h4: "1.75rem", // 28px
    h5: "1.5rem", // 24px
    h6: "1.5rem", // 24px
    root: "1.5rem", // 24px
};

/**
 * Global variables (css vars)
 *
 * These are declared as css vars at the `root:` level, in scope of the `html` element
 * - See: https://vanilla-extract.style/documentation/global-api/create-global-theme/
 */

export const rootVars = createGlobalTheme(":root", {
    aspectRatio: {
        extraWide: "10 / 3",
        square: "1 / 1",
        tall: "9 / 16",
        wide: "16 / 9",
    },
    border: {
        border_default: `1px solid ${color.border_default}`,
        border_hover: `1px solid ${color.border_hover}`,
    },
    borderRadius: {
        "50%": "50%",
        lg: "12px",
        md: "8px",
        pill: "99999px",
        sm: "4px",
    },
    boxShadow: {
        lg: "0 8px 24px rgba(140,149,159,0.2)",
        md: "0 3px 6px rgba(140,149,159,0.15)",
        sm: "0 1px 0 rgba(31,35,40,0.04)",
    },
    display: {
        block: "block",
        flex: "flex",
        grid: "grid",
        inline: "inline",
        "inline-block": "inline-block",
        "inline-flex": "inline-flex",
        none: "none",
        table: "table",
        "table-cell": "table-cell",
    },
    fontFamily: {
        body: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
    },
    fontSize: fontSizeRaw,
    fontWeight: {
        bold: "700",
        extrabold: "800",
        light: "300",
        medium: "500",
        normal: "400",
        semibold: "600",
    },
    gridTemplateColumns: {
        "1_2": "1fr 2fr",
        "1_3": "1fr 3fr",
        "1x": "1fr",
        "2_1": "2fr 1fr",
        "2x": "repeat(2, 1fr)",
        "3_1": "3fr 1fr",
        "3x": "repeat(3, 1fr)",
        "4x": "repeat(4, 1fr)",
        "5_7": "5fr 7fr",
        "5x": "repeat(5, 1fr)",
        "6x": "repeat(6, 1fr)",
        "7_5": "7fr 5fr",
        "7x": "repeat(7, 1fr)",
    },
    height: {
        "": "0",
        "25%": "25%",
        "25vh": "25vh",
        "50%": "50%",
        "50vh": "50vh",
        "75%": "75%",
        "75vh": "75vh",
        "90vh": "90vh",
        "100%": "100%",
        "100vh": "100vh",
        auto: "auto",
        "min-content": "min-content",
    },
    lineHeight: lineHeightRaw,
    spacing: {
        auto: "auto",
        none: "0",
        /* eslint-disable sort-keys-fix/sort-keys-fix */
        space_0: "0",
        "space_0.25": "0.0625rem",
        "space_0.5": "0.125rem",
        space_1: "0.25rem",
        space_2: "0.5rem",
        space_3: "0.75rem",
        space_4: "1rem",
        space_5: "1.25rem",
        space_6: "1.5rem",
        space_8: "2rem",
        space_10: "2.5rem",
        space_12: "3rem",
        // space_14: "3.5rem",
        // space_16: "4rem",
        // space_20: "5rem",
        // space_24: "6rem",
        // space_32: "8rem",
        /* eslint-enable sort-keys-fix/sort-keys-fix */
    },
    transitionDuration: {
        long: "600ms",
        medium: "400ms",
        short: "200ms",
    },
    width: {
        "": "0",
        "25%": "25%",
        "50%": "50%",
        "100%": "100%",
        "100vw": "100vw",
        auto: "auto",
        col_1: "8.33333333%",
        col_2: "16.66666666%",
        col_3: "24.99999999%",
        col_4: "33.33333332%",
        col_5: "41.66666665%",
        col_6: "49.99999998%",
        col_7: "58.33333331%",
        col_8: "66.66666664%",
        col_9: "74.99999997%",
        col_10: "83.3333333%",
        col_11: "91.66666663%",
        col_12: "100%",
        main_lg: "76rem",
        main_md: "58",
        main_sm: "40rem",
        "max-content": "max-content",
        "min-content": "min-content",
    },
});
