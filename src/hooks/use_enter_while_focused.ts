import { useEffect } from "react";

import type { ElementTypeArg } from "../types";
import type { MutableRefObject, RefObject } from "react";

type UseEnterWhileFocusedArgs<TTriggerType extends ElementTypeArg> = {
  callback: () => void;
  triggerRef:
    | RefObject<TTriggerType | undefined>
    | MutableRefObject<TTriggerType | undefined>;
};

export function useEnterWhileFocused<TTriggerType extends ElementTypeArg>({
  triggerRef,
  callback,
}: UseEnterWhileFocusedArgs<TTriggerType>) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        triggerRef.current === document.activeElement &&
        event.key === "Enter"
      ) {
        /** Avoid accidentally triggering a form submission if used within form context */
        event.preventDefault();
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback, triggerRef]);
}
