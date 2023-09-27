export function convertCurrencyFromMinor(amount: number | string): number {
    if (typeof amount !== "number" && typeof amount !== "string") {
        return amount as number;
    }

    return Number(amount || 0) / 100;
}
