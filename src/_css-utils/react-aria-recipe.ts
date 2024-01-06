import type { ComplexStyleRule } from "@vanilla-extract/css";

export type ReactAriaRecipe<TRenderProps> = Record<
    keyof TRenderProps,
    Record<
        TRenderProps[keyof TRenderProps] extends boolean
            ? "false" | "true"
            : TRenderProps[keyof TRenderProps] extends number | string
              ? TRenderProps[keyof TRenderProps]
              : never,
        ComplexStyleRule | string
    >
>;
