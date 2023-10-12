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
	if (!value) {
		return "";
	}

	const decimalSeparator = new Intl.NumberFormat(locale)
		.format(1.1)
		.replace(/1/g, "");
	const hasDecimal = value.includes(decimalSeparator);

	if (hasDecimal) {
		const [integer, decimal] = value.split(decimalSeparator);
		const cleanInteger = integer?.replace(/[^\d.]/g, "");
		const cleanDecimal = decimal?.replace(/[^\d.]/g, "");

		let parsed = NumberParser(locale)(cleanInteger);

		if (Number.isNaN(parsed) || !parsed) {
			return "";
		}

		if (parsed > Number.MAX_SAFE_INTEGER - 1) {
			parsed = Number.MAX_SAFE_INTEGER - 1;
		}

		return `${parsed}.${decimal ? cleanDecimal.slice(0, 2) : ""}`;
	}

	const cleanValue = value?.replace(/[^\d.]/g, "");

	let parsed = NumberParser(locale)(cleanValue);

	if (Number.isNaN(parsed) || !parsed) {
		return "";
	}

	if (parsed > Number.MAX_SAFE_INTEGER - 1) {
		parsed = Number.MAX_SAFE_INTEGER - 1;
	}

	return parsed.toString();
}
