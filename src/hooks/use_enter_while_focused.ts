import { useEffect } from "react";

import type { ElementTypeArg } from "../types";
import type { MutableRefObject, RefObject } from "react";

type UseEnterWhileFocusedArgs<TTriggerType extends ElementTypeArg> = {
  triggerRef:
    | RefObject<TTriggerType | undefined>
    | MutableRefObject<TTriggerType | undefined>;
  callback: () => void;
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
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback, triggerRef]);
}
