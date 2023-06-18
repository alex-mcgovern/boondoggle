import { useEffect, useRef } from "react";

import type { ForwardedRef } from "react";

export const useForwardRef = <T>(
    ref: ForwardedRef<T>,
    initialValue: any = null
) => {
    const targetRef = useRef<T>(initialValue);

    useEffect(() => {
        if (!ref) {
            return;
        }

        if (typeof ref === "function") {
            ref(targetRef.current);
        } else {
            // eslint-disable-next-line no-param-reassign
            ref.current = targetRef.current;
        }
    }, [ref]);

    return targetRef;
};
