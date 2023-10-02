type CurrencyFormatterArgs = {
    /**
     * The locale to use.
     */
    locale: string;
    /**
     * The value to format.
     */
    value: string | undefined;
};

export function currencyFormatter({
    locale,
    value,
}: CurrencyFormatterArgs): string | undefined {
    const { format } = new Intl.NumberFormat(locale);

    if (typeof value === "undefined") {
        return value;
    }

    const hasDecimal = value.includes(".");

    if (hasDecimal) {
        const decimalSeparator = format(1.1).replace(/1/g, "");
        const [integer, decimal] = value.split(".");
        const formattedInteger = format(Number(integer));

        return `${formattedInteger}${decimalSeparator}${decimal ?? ""}`;
    }

    return format(Number(value));
}
