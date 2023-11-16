/**
 * A function that can be used to ensure that a switch statement is exhaustive.
 */
export const exhaustiveSwitchGuard = (
	/**
	 * The type of the switch case that is being guarded.
	 */
	unhandledCase: never,
): never => {
	console.error(
		`[exhaustiveSwitchGuard()]: Received unhandled switch case ${
			unhandledCase as string
		}`,
	);

	return null as never;
};
