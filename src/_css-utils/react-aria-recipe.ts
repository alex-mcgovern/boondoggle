import type { ComplexStyleRule } from "@vanilla-extract/css";

type RecipeStyleRule = ComplexStyleRule | string;

type VariantDefinitions = Record<string, RecipeStyleRule>;

type VariantGroups = Record<string, VariantDefinitions>;

export type ReactAriaRecipe<TRenderProps extends object> =
    | {
          [State in keyof TRenderProps]: Record<
              Exclude<TRenderProps[State], null> extends boolean
                  ? "false" | "true"
                  : Exclude<TRenderProps[State], null> extends
                          | number
                          | string
                          | symbol
                    ? Exclude<TRenderProps[State], null>
                    : never,
              ComplexStyleRule | string
          >;
      }
    | VariantGroups;
