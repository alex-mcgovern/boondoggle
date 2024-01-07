import type { ComplexStyleRule } from "@vanilla-extract/css";

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
    | Record<string, Record<string, ComplexStyleRule | string>>;
