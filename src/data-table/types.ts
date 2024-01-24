export type TableNumberRangeFilterMode =
    | "is_between"
    | "is_equal_to"
    | "is_greater_than"
    | "is_less_than";

export type PaginationOptions = {
    /**
     * String to use for the next button
     */
    strNext: string;

    /**
     * String to use for the page label
     */
    strPage: string;

    /**
     * String to use for the previous button
     */
    strPrev: string;

    /**
     * String to use for the results label
     */
    strResults: string;
};
