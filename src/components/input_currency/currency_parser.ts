import NumberParser from "intl-number-parser";

type CurrencyParserArgs = {
	/**
	 * The locale to use.
	 */
	locale: string;
	/**
	 * The value to format.
	 */
	value: string;
};

export function currencyParser({
	locale,
	value,
}: CurrencyParserArgs): string | undefined {
	if (typeof value === "undefined" || value === "") {
		return "";
	}

	const decimalSeparator = new Intl.NumberFormat(locale)
		.format(1.1)
		.replace(/1/g, "");
	const hasDecimal = value.includes(decimalSeparator);

	if (value === decimalSeparator) {
		return decimalSeparator;
	}

	if (hasDecimal) {
		const [integer, decimal] = value.split(decimalSeparator);
		const cleanInteger = integer?.replace(/[^\d.]/g, "");
		if (cleanInteger === "") {
			return "";
		}
		const cleanDecimal = decimal?.replace(/[^\d.]/g, "");

		let parsed = NumberParser(locale)(cleanInteger);

		if (typeof parsed === "undefined" || Number.isNaN(parsed)) {
			return "";
		}

		if (parsed > Number.MAX_SAFE_INTEGER - 1) {
			parsed = Number.MAX_SAFE_INTEGER - 1;
		}

		return `${parsed}.${decimal ? cleanDecimal.slice(0, 2) : ""}`;
	}

	const cleanValue = value?.replace(/[^\d.]/g, "");
	if (cleanValue === "") {
		return "";
	}

	let parsed = NumberParser(locale)(cleanValue);
	if (Number.isNaN(parsed)) {
		return "";
	}

	if (parsed > Number.MAX_SAFE_INTEGER - 1) {
		parsed = Number.MAX_SAFE_INTEGER - 1;
	}
	return parsed.toString();
}
