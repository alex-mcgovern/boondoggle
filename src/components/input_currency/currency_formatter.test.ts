import { currencyFormatter } from "./currency_formatter";

describe("currencyFormatter()", () => {
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
