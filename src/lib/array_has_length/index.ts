/**
 * Util function to check a value is an array and has a length > 0.
 */
export function arrayHasLength<TArrayOf = unknown>(
	maybe_array: unknown,
): maybe_array is Array<TArrayOf> {
	return Array.isArray(maybe_array) && maybe_array.length > 0;
}
