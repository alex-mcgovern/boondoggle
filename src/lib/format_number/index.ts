import { convertCurrencyFromMinor } from "../currency/convert_currency_from_minor";
import { convertCurrencyToMinor } from "../currency/convert_currency_to_minor";

type FormatNumberOptions = {
    from_minor?: boolean;
    region?: string | string[] | undefined;
    to_minor?: boolean;
};

export function formatNumber(
    number: number,
    { from_minor, region = "en-AE", to_minor }: FormatNumberOptions
): string {
    if (from_minor) {
        return new Intl.NumberFormat(region).format(convertCurrencyFromMinor(number || 0));
    }

    if (to_minor) {
        return new Intl.NumberFormat(region).format(convertCurrencyToMinor(number || 0));
    }

    return new Intl.NumberFormat(region).format(number || 0);
}
