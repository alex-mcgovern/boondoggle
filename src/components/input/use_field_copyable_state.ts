import { useCallback, useState } from "react";

type UseFieldCopyableStateArgs = {
    /**
     * Whether the field is copyable.
     */
    isCopyable?: boolean;

    /**
     * Whether the field is read-only.
     */
    readOnly?: boolean;
};

/**
 * Hook to handle copying a value from a readOnly input.
 */
export function useFieldCopyableState({
    isCopyable,
    readOnly,
}: UseFieldCopyableStateArgs) {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const revertIsCopied = useCallback(() => {
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    }, []);

    const handleCopyValue = useCallback(
        (value: string | number | readonly string[] | undefined) => {
            return navigator.clipboard.writeText(value as string).then(() => {
                setIsCopied(true);

                return revertIsCopied();
            });
        },
        [revertIsCopied]
    );

    if (!readOnly || !isCopyable) {
        return {};
    }

    return {
        handleCopyValue,
        isCopied,
    };
}
