/**
 * Approach adapted from a LogRocket blog by Ohans Emmanuel
 * https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
 */
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef, useCallback, useMemo, useState } from "react";

import { variantColorOverlay } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Loader } from "../decorative.loader";
import { SlotWrapper } from "../support.slot_wrapper";
import * as styles from "./styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { ColorOverlay } from "../../styles/theme.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../types";
import type { BoxProps } from "../core.box";
import type { SlotWrapperProps } from "../support.slot_wrapper";
import type {
  ComponentProps,
  ElementType,
  ReactElement,
  ReactNode,
} from "react";

/** ----------------------------------------------------------------------------- */

type GetLoadingSlotSideArgs = { slotLeft?: ReactNode; slotRight?: ReactNode };

const getLoadingSlotSide = ({
  slotLeft,
  slotRight,
}: GetLoadingSlotSideArgs): "right" | "left" => {
  if (slotRight) {
    return "right";
  }
  if (slotLeft) {
    return "left";
  }
  return "right";
};

/** ----------------------------------------------------------------------------- */

type BaseButtonProps<TPolymorphicAs extends ElementType> = SprinklesArgs &
  PolymorphicComponentPropWithRef<
    TPolymorphicAs,
    {
      /** Forces the button's active state */
      active?: boolean;
      /** The appearance of the button: `primary` for important actions, `secondary` for less important actions, and `tertiary` for additional actions with the least emphasis. */
      appearance?: styles.Appearance;
      /** The React node shown in the button. */
      children?: ReactNode;
      /** Use color to indicate beneficial, or potentially destructive actions. */
      colorOverlay?: ColorOverlay;
      /** Whether the button is disabled or not. */
      disabled?: boolean;
      /** Whether to show a loader on first render */
      isLoading?: boolean;
      /** The title for the button, shown in the UI. */
      name: string;
      /** The size of the button: `sm` for small secondary content, `md` as the default size meeting tap target requirements, and `lg` for edge cases like marketing CTAs. */
      size?: "square_md" | "square_sm" | ElementSizeEnum;
      /** The React node shown on the left side of the button. */
      slotLeft?: ReactNode;
      /** Props forwarded to slots */
      slotProps?: SlotWrapperProps["slotProps"];
      /** The React node shown on the right side of the button. */
      slotRight?: ReactNode;
      /** The HTML button type, defaults to `button`. */
      type?: "button" | "submit" | "reset";
      /** Whether to show a loader on click */
      withLoadingState?: boolean;
    }
  >;

/** ----------------------------------------------------------------------------- */

type ButtonComponent = <TPolymorphicAs extends ElementType = "button">(
  props: BaseButtonProps<TPolymorphicAs>
) => ReactElement | null;

export type ButtonProps = ComponentProps<typeof Button>;

/** ----------------------------------------------------------------------------- */

export const Button: ButtonComponent = forwardRef(
  <TPolymorphicAs extends ElementType = "span">(
    {
      active,
      appearance = "primary",
      as,
      children,
      className: userClassName,
      colorOverlay,
      disabled,
      isLoading: initIsLoading,
      size = "md",
      slotLeft,
      slotProps: userSlotProps,
      slotRight,
      type = "button",
      withLoadingState,
      ...rest
    }: BaseButtonProps<TPolymorphicAs>,
    ref?: PolymorphicRef<TPolymorphicAs>
  ) => {
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    /** --------------------------------------------- */

    const Component = as || "button";

    /** --------------------------------------------- */

    const slotProps: BoxProps | undefined = useMemo(() => {
      if (size === "square_md" || size === "square_sm") {
        return {
          ...userSlotProps,
          width: "spacing_3",
        };
      }
      return userSlotProps;
    }, [size, userSlotProps]);

    /** --------------------------------------------- */

    const [isLoading, setIsLoading] = useState(initIsLoading);

    const revertLoadingState = useCallback(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }, []);

    const handleClickWithLoadingState = useCallback(() => {
      setIsLoading(true);
      rest.onClick?.();
      revertLoadingState();
    }, [rest, revertLoadingState]);

    /** --------------------------------------------- */

    const loaderSide = useMemo(() => {
      return getLoadingSlotSide({ slotLeft, slotRight });
    }, [slotLeft, slotRight]);

    /** --------------------------------------------- */

    return (
      <Component
        {...{
          "aria-disabled": disabled,
          className: clsx(
            styles.getButtonStyles({ appearance, size }),
            getSprinkles(atomProps),
            userClassName,
            colorOverlay ? variantColorOverlay[colorOverlay] : undefined
          ),
          "data-active": active,
          disabled,
          onClick: withLoadingState
            ? handleClickWithLoadingState
            : rest.onClick,
          ref,
          type,
          ...otherProps,
        }}
      >
        <SlotWrapper
          color="inherit"
          size={size}
          slotLeft={isLoading && loaderSide === "left" ? <Loader /> : slotLeft}
          slotProps={slotProps}
          slotRight={
            isLoading && loaderSide === "right" ? <Loader /> : slotRight
          }
        >
          {children}
        </SlotWrapper>
      </Component>
    );
  }
);
