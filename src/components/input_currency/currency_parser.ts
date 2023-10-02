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
        return undefined;
    }

    const decimalSeparator = new Intl.NumberFormat(locale)
        .format(1.1)
        .replace(/1/g, "");
    const hasDecimal = value.includes(decimalSeparator);

    if (hasDecimal) {
        const [integer, decimal] = value.split(decimalSeparator);
        let parsed = NumberParser(locale)(integer);

        if (parsed > Number.MAX_SAFE_INTEGER - 1) {
            parsed = Number.MAX_SAFE_INTEGER - 1;
        }

        return `${parsed}.${decimal}`;
    }

    let parsed = NumberParser(locale)(value);

    if (parsed > Number.MAX_SAFE_INTEGER - 1) {
        parsed = Number.MAX_SAFE_INTEGER - 1;
    }

    return parsed.toString();
}
