/**
 * Hook to wrap popper-js logic for dropdown menu for both SelectSingle and SelectMulti
 */
import { useState } from "react";
import { usePopper } from "react-popper";

import type { VariationPlacement } from "@popperjs/core";

export type UsePopperPlacement = Extract<
  VariationPlacement,
  "bottom-start" | "bottom-end"
>;

type UseSelectPopperProps = {
  placement?: Extract<VariationPlacement, "bottom-start" | "bottom-end">;
};

export const useSelectPopper = ({
  placement = "bottom-start",
}: UseSelectPopperProps) => {
  const [popperAnchorEl, setPopperAnchorEl] = useState<HTMLDivElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const { styles: popperStyles, attributes: popperAttributes } = usePopper(
    popperAnchorEl,
    popperElement,
    {
      placement,
      strategy: "absolute",
      modifiers: [
        {
          name: "flip",
          options: {
            fallbackPlacements: [],
          },
        },
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ],
    }
  );

  return {
    setPopperAnchorEl,
    setPopperElement,
    popperStyles,
    popperAttributes,
  };
};
