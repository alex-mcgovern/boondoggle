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
    const cleanValue = value?.replace(/[^\d.]/g, "");

    if (typeof cleanValue === "undefined" || cleanValue.length === 0) {
        return "";
    }

    const hasDecimal = cleanValue.includes(".");

    if (hasDecimal) {
        const decimalSeparator = format(1.1).replace(/1/g, "");
        const [integer, decimal] = cleanValue.split(".");

        if (Number.isNaN(Number(integer))) {
            return "";
        }

        const formattedInteger = format(Number(integer));

        return `${formattedInteger}${decimalSeparator}${decimal ?? ""}`;
    }

    return Number.isNaN(Number(cleanValue)) ? "" : format(Number(cleanValue));
}
