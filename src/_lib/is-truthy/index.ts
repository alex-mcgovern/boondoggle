type Truthy<T> = T extends "" | 0 | false | null | undefined ? never : T;

/**
 * Typescript predicate function that returns true if the value is truthy.
 */
export function isTruthy<T>(value: T): value is Truthy<T> {
	return !!value;
}
