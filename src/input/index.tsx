import type { ReactNode } from "react";
import type { InputProps as RACInputProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Input as RACInput } from "react-aria-components";

import { inputCSS, inputContainerCSS, inputIconCSS } from "./styles.css";

export type InputProps = RACInputProps & {
    icon?: ReactNode;
    variant?: "default" | "unstyled";
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <div className={inputContainerCSS}>
            {props.icon && <div className={inputIconCSS}>{props.icon}</div>}
            <RACInput
                {...props}
                className={(renderProps) =>
                    clsx(
                        props.className,
                        inputCSS({
                            ...renderProps,
                            hasIcon: props.icon ? "true" : "false",
                            variant: props.variant ?? "default",
                        }),
                    )
                }
                ref={ref}
            />
        </div>
    );
});
