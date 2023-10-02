import { currencyParser } from "./currency_parser";

describe("currencyParser()", () => {
    test("(en-GB) parses whole number correctly", () => {
        expect(currencyParser({ locale: "en-GB", value: "420,000" })).toBe(
            "420000"
        );
    });

    test("(fr-FR) parses whole number correctly", () => {
        expect(currencyParser({ locale: "fr-FR", value: "420 000" })).toBe(
            "420000"
        );
    });

    test("(de-DE) parses whole number correctly", () => {
        expect(currencyParser({ locale: "de-DE", value: "420.000" })).toBe(
            "420000"
        );
    });

    test("(en-GB) parses number with fraction (period) correctly", () => {
        expect(currencyParser({ locale: "en-GB", value: "420,000.69" })).toBe(
            "420000.69"
        );
    });

    test("(fr-FR) parses number with fraction (comma) correctly", () => {
        expect(currencyParser({ locale: "fr-FR", value: "420 000,69" })).toBe(
            "420000.69"
        );
    });

    test("(de-DE) parses number with fraction (comma) correctly", () => {
        expect(currencyParser({ locale: "de-DE", value: "420.000,69" })).toBe(
            "420000.69"
        );
    });

    test("(en-GB) parses number with trailing period correctly", () => {
        expect(currencyParser({ locale: "en-GB", value: "420,000." })).toBe(
            "420000."
        );
    });

    test("(fr-FR) parses number with trailing comma correctly", () => {
        expect(currencyParser({ locale: "fr-FR", value: "420 000," })).toBe(
            "420000."
        );
    });

    test("(de-DE) parses number with trailing comma correctly", () => {
        expect(currencyParser({ locale: "de-DE", value: "420.000," })).toBe(
            "420000."
        );
    });
});
