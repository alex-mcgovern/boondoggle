import { useEffect } from "react";

import type { ElementTypeArg } from "../types";
import type { MutableRefObject, RefObject } from "react";

type UseClickOutsideArgs<
  TContentType extends ElementTypeArg,
  TTriggerType extends ElementTypeArg
> = {
  contentRef:
    | RefObject<TContentType | undefined>
    | MutableRefObject<TContentType | undefined>;
  triggerRef?:
    | RefObject<TTriggerType | undefined>
    | MutableRefObject<TTriggerType | undefined>;
  callback: () => void;
};

export function useClickOutside<
  TContentType extends ElementTypeArg,
  TTriggerType extends ElementTypeArg
>({
  contentRef,
  triggerRef,
  callback,
}: UseClickOutsideArgs<TContentType, TTriggerType>) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        triggerRef?.current &&
        triggerRef.current.contains(event.target as Node)
      ) {
        return;
      }
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    }
    function handleEscape(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        callback();
      }
    }

    /**
     * Bind event listeners
     */
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    /**
     * Unbind event listeners
     */
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  });
}
