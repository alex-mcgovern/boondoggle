/**
 * Hook to wrap popper-js logic for dropdown menu for both SelectSingle and SelectMulti
 */
import { useState } from "react";
import { usePopper } from "react-popper";

type UseSelectPopperProps = {
  isFlipped?: boolean;
};

export const useSelectPopper = ({
  isFlipped = false,
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
      placement: "bottom-start",
      strategy: "fixed",
      modifiers: [{ name: "flip", enabled: isFlipped }],
    }
  );

  return {
    setPopperAnchorEl,
    setPopperElement,
    popperStyles,
    popperAttributes,
  };
};
