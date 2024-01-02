import { useCallback, useState } from "react";

export function useFieldCopyableState({
	isCopyable,
	readOnly,
}: {
	isCopyable?: boolean;
	readOnly?: boolean;
}) {
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
		[revertIsCopied],
	);

	if (!readOnly || !isCopyable) {
		return {};
	}

	return {
		handleCopyValue,
		isCopied,
	};
}
