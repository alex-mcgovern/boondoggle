import { currencyFormatter } from "./currency_formatter";

describe("currencyFormatter()", () => {
    test("returns empty string when passed empty string", () => {
        expect(currencyFormatter({ locale: "en-GB", value: "" })).toBe("");
    });

    test("returns empty string when passed NaN", () => {
        expect(
            currencyFormatter({ locale: "en-GB", value: "not a number" })
        ).toBe("");
    });

    test("returns numbers only when non-numeric characters suffixed to whole number", () => {
        expect(currencyFormatter({ locale: "en-GB", value: "123foo" })).toBe(
            "123"
        );
    });

    test("returns numbers only when non-numeric characters prefixed to whole number", () => {
        expect(currencyFormatter({ locale: "en-GB", value: "foo123" })).toBe(
            "123"
        );
    });

    test("returns numbers only when non-numeric characters prefixed to fraction", () => {
        expect(currencyFormatter({ locale: "en-GB", value: "123.abc" })).toBe(
            "123."
        );
    });

    test("returns numbers only when non-numeric characters suffiex to fraction", () => {
        expect(currencyFormatter({ locale: "en-GB", value: "123.12abc" })).toBe(
            "123.12"
        );
    });

    test("(en-GB) formats whole number correctly", () => {
        expect(currencyFormatter({ locale: "en-GB", value: "420000" })).toBe(
            "420,000"
        );
    });

    test("(fr-FR) formats whole number correctly", () => {
        expect(currencyFormatter({ locale: "fr-FR", value: "420000" })).toBe(
            "420 000"
        );
    });

    test("(de-DE) formats whole number correctly", () => {
        expect(currencyFormatter({ locale: "de-DE", value: "420000" })).toBe(
            "420.000"
        );
    });

    test("(en-GB) formats number with fraction (period) correctly", () => {
        expect(currencyFormatter({ locale: "en-GB", value: "420000.69" })).toBe(
            "420,000.69"
        );
    });

    test("(fr-FR) formats number with fraction (comma) correctly", () => {
        expect(currencyFormatter({ locale: "fr-FR", value: "420000.69" })).toBe(
            "420 000,69"
        );
    });

    test("(de-DE) formats number with fraction (comma) correctly", () => {
        expect(currencyFormatter({ locale: "de-DE", value: "420000.69" })).toBe(
            "420.000,69"
        );
    });

    test("(en-GB) formats number with trailing period correctly", () => {
        expect(currencyFormatter({ locale: "en-GB", value: "420000." })).toBe(
            "420,000."
        );
    });

    test("(fr-FR) formats number with trailing comma correctly", () => {
        expect(currencyFormatter({ locale: "fr-FR", value: "420000." })).toBe(
            "420 000,"
        );
    });

    test("(de-DE) formats number with trailing comma correctly", () => {
        expect(currencyFormatter({ locale: "de-DE", value: "420000." })).toBe(
            "420.000,"
        );
    });
});
