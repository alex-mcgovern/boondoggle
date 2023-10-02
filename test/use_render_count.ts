import { useEffect, useRef } from "react";

export const useRenderCount = () => {
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;
        console.debug("renderCount:", renderCount.current);
    });
};
