import { convertCurrencyFromMinor } from "..";

describe("convertCurrencyFromMinor()", () => {
    it("converts number with decimal correctly", () => {
        expect(convertCurrencyFromMinor(1095)).toBe(10.95);
    });
    it("converts number without decimal correctly", () => {
        expect(convertCurrencyFromMinor(1000)).toBe(10.0);
    });
    it("converts string with decimal correctly", () => {
        expect(convertCurrencyFromMinor("1095")).toBe(10.95);
    });
    it("converts string without decimal correctly", () => {
        expect(convertCurrencyFromMinor("1000")).toBe(10.0);
    });
});
