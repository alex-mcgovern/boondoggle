/**
 * Formats an ISO date string to a locale date string
 * ToDo [formatDate()]: Validate date string?
 */

export const formatDate = (
    date?: string | number | readonly string[],
    locale?: Intl.LocalesArgument
) => {
    if (typeof date !== "string") {
        return undefined;
    }

    return date ? new Date(date).toLocaleDateString(locale) : undefined;
};
