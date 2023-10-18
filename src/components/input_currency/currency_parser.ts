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
		const [int, dec] = value.split(decimalSeparator);

		const cleanInt = int?.replace(/[^\d.]/g, "");
		const cleanDec = dec?.replace(/[^\d.]/g, "");

		if (cleanInt === "" && cleanDec === "") {
			return "";
		}

		let parsedInt = NumberParser(locale)(cleanInt);
		const parsedDec = NumberParser(locale)(cleanDec);

		if (
			(typeof parsedInt === "undefined" || Number.isNaN(parsedInt)) &&
			(typeof parsedDec === "undefined" || Number.isNaN(parsedDec))
		) {
			return "";
		}

		if (parsedInt > Number.MAX_SAFE_INTEGER - 1) {
			parsedInt = Number.MAX_SAFE_INTEGER - 1;
		}

		return `${parsedInt}.${dec ? parsedDec.toString().slice(0, 2) : ""}`;
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
