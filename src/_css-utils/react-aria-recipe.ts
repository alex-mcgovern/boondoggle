import type { ComplexStyleRule } from "@vanilla-extract/css";

export type RACRecipe<T extends object> = {
    [S in keyof T]: Record<
        T[S] extends boolean
            ? "false" | "true"
            : T[S] extends number | string | symbol
              ? T[S]
              : never,
        ComplexStyleRule | string
    >;
};

export const racRecipeHelper = <T extends object>(variants: RACRecipe<T>) =>
    variants;
