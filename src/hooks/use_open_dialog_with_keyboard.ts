import { useEffect } from "react";

import type { ElementTypeArg } from "../common-types";
import type { MutableRefObject, RefObject } from "react";

type UseOpenDialogWithKeyboardArgs<TTriggerType extends ElementTypeArg> = {
  callback: () => void;
  dialogRef:
    | RefObject<HTMLDialogElement | undefined>
    | MutableRefObject<HTMLDialogElement | undefined>;
  preventOpenOnKeydown?: boolean;
  triggerRef:
    | RefObject<TTriggerType | undefined>
    | MutableRefObject<TTriggerType | undefined>;
};

export function useOpenDialogWithKeyboard<TTriggerType extends ElementTypeArg>({
  callback,
  dialogRef,
  preventOpenOnKeydown,
  triggerRef,
}: UseOpenDialogWithKeyboardArgs<TTriggerType>) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (preventOpenOnKeydown || dialogRef.current?.open) {
        return;
      }

      if (
        triggerRef.current === document.activeElement &&
        (event.key === "ArrowDown" || event.key === "Enter")
      ) {
        /** Avoid accidentally triggering a form submission if used within form context */
        // event.preventDefault();
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback, dialogRef, preventOpenOnKeydown, triggerRef]);
}
