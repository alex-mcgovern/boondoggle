import { convertCurrencyToMinor } from "..";

describe("convertCurrencyToMinor()", () => {
    it("converts number with decimal correctly", () => {
        expect(convertCurrencyToMinor(10.95)).toBe(1095);
    });
    it("converts number without decimal correctly", () => {
        expect(convertCurrencyToMinor(10.0)).toBe(1000);
    });
    it("converts string with decimal correctly", () => {
        expect(convertCurrencyToMinor("10.95")).toBe(1095);
    });
    it("converts string without decimal correctly", () => {
        expect(convertCurrencyToMinor("10.0")).toBe(1000);
    });
});
