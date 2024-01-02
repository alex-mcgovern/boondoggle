import { useCallback, useState } from "react";

/**
 * Hook to manage the visibility state of a field.
 */
export function useFieldVisibilityState({
	initialIsVisible,
}: {
	/**
	 * Whether the input field value is visible or not.
	 */
	initialIsVisible?: boolean;
}) {
	// Manage the visibility state to allow it to be toggled.
	const [isVisible, setIsVisible] = useState<boolean>(!!initialIsVisible);

	// Event handler for when the visibility is toggled.

	const handleToggleVisibility = useCallback(() => {
		return setIsVisible((prevIsVisible) => {
			return !prevIsVisible;
		});
	}, []);

	return { handleToggleVisibility, isVisible };
}
