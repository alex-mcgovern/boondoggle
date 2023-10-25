import { currencyParser } from "./currencyParser";
describe("currencyParser()", () => {
	test("returns empty string when passed empty string", () => {
		expect(currencyParser({ locale: "en-GB", value: "" })).toBe("");
	});

	test("returns . when passed .", () => {
		expect(currencyParser({ locale: "en-GB", value: "." })).toBe(".");
	});

	test("returns 0.8 when passed .8", () => {
		expect(currencyParser({ locale: "en-GB", value: ".8" })).toBe("0.8");
	});

	test("(de-DE) returns , when passed ,", () => {
		expect(currencyParser({ locale: "de-DE", value: "," })).toBe(",");
	});

	test("returns 0 when passed 0", () => {
		expect(currencyParser({ locale: "en-GB", value: "0" })).toBe("0");
	});

	test("returns numbers only when non-numeric characters suffixed to whole number", () => {
		expect(currencyParser({ locale: "en-GB", value: "420,000foo" })).toBe(
			"420000",
		);
	});

	test("returns numbers only when non-numeric characters prefixed to whole number", () => {
		expect(currencyParser({ locale: "en-GB", value: "foo420,000" })).toBe(
			"420000",
		);
	});

	test("returns numbers only when non-numeric characters suffixed to fraction", () => {
		expect(
			currencyParser({ locale: "en-GB", value: "420,000.foo69" }),
		).toBe("420000.69");
	});

	test("returns numbers only when non-numeric characters prefixed to fractional number", () => {
		expect(
			currencyParser({ locale: "en-GB", value: "foo420,000.69foo" }),
		).toBe("420000.69");
	});

	test("returns empty string when passed non-numeric value", () => {
		expect(currencyParser({ locale: "en-GB", value: "foo" })).toBe("");
	});

	test("(en-GB) parses whole number correctly", () => {
		expect(currencyParser({ locale: "en-GB", value: "420,000" })).toBe(
			"420000",
		);
	});

	test("(fr-FR) parses whole number correctly", () => {
		expect(currencyParser({ locale: "fr-FR", value: "420 000" })).toBe(
			"420000",
		);
	});

	test("(de-DE) parses whole number correctly", () => {
		expect(currencyParser({ locale: "de-DE", value: "420.000" })).toBe(
			"420000",
		);
	});

	test("(en-GB) parses number with fraction (period) correctly", () => {
		expect(currencyParser({ locale: "en-GB", value: "420,000.69" })).toBe(
			"420000.69",
		);
	});

	test("(fr-FR) parses number with fraction (comma) correctly", () => {
		expect(currencyParser({ locale: "fr-FR", value: "420 000,69" })).toBe(
			"420000.69",
		);
	});

	test("(de-DE) parses number with fraction (comma) correctly", () => {
		expect(currencyParser({ locale: "de-DE", value: "420.000,69" })).toBe(
			"420000.69",
		);
	});

	test("(en-GB) parses number with trailing period correctly", () => {
		expect(currencyParser({ locale: "en-GB", value: "420,000." })).toBe(
			"420000.",
		);
	});

	test("(fr-FR) parses number with trailing comma correctly", () => {
		expect(currencyParser({ locale: "fr-FR", value: "420 000," })).toBe(
			"420000.",
		);
	});

	test("(de-DE) parses number with trailing comma correctly", () => {
		expect(currencyParser({ locale: "de-DE", value: "420.000," })).toBe(
			"420000.",
		);
	});
});
