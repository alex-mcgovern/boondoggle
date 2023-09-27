import { convertCurrencyFromMinor } from "../convert_currency_from_minor";
import { convertCurrencyToMinor } from "../convert_currency_to_minor";

type FormatCurrencyOptions = {
    currency: Intl.NumberFormatOptions["currency"];
    currencyDisplay?: Intl.NumberFormatOptions["currencyDisplay"];
    from_minor?: boolean;
    region?: string | string[] | undefined;
    to_minor?: boolean;
};

export function formatCurrency(
    number: number,
    {
        currency = "AED",
        currencyDisplay = "code",
        from_minor,
        region = "en-AE",
        to_minor,
    }: FormatCurrencyOptions
): string {
    if (from_minor) {
        return new Intl.NumberFormat(region, {
            currency,
            currencyDisplay,
            style: "currency",
        }).format(convertCurrencyFromMinor(number || 0));
    }

    if (to_minor) {
        return new Intl.NumberFormat(region, {
            currency,
            currencyDisplay,
            style: "currency",
        }).format(convertCurrencyToMinor(number || 0));
    }

    return new Intl.NumberFormat(region, {
        currency,
        currencyDisplay,
        style: "currency",
    }).format(number || 0);
}
